import React from "react";
import Schema from "async-validator";
import PropTypes from "prop-types";
import { ofActions, rxConnect } from "rx-connect-clone";
import { Observable, Subject } from "rxjs";
import { pluck, map, startWith } from "rxjs/operators";

const valueOfTarget = target => {
  const { type, checked, value, id } = target;
  switch (type) {
    case "checkbox":
      return { [id]: checked };
    default:
      return { [id]: value };
  }
};

const runRulesOnField = (rules, e) => {
  const field = valueOfTarget(e.target);

  let error;
  const schema = new Schema(rules);
  schema.validate(field, errors => {
    error = errors.filter(input => input.field === e.target.id);

    if (error.length > 0) {
      error = error.reduce(
        (previous, err) => ({ ...previous, [`${err.field}Error`]: err }),
        {}
      );
    } else {
      error = { [`${e.target.id}Error`]: {} };
    }
  });

  return error;
};

const runRulesOnAllFields = (rules, e) => {
  const fields = Array.from(e.target.elements)
    .filter(target => target.id)
    .reduce(
      (previous, target) => ({ ...previous, ...valueOfTarget(target) }),
      {}
    );

  let error;
  const schema = new Schema(rules);
  schema.validate(fields, errors => {
    if (errors && errors.length > 0) {
      error = errors.reduce(
        (previous, err) => ({ ...previous, [`${err.field}Error`]: err }),
        {}
      );
    } else {
      error = {};
    }
  });

  return error;
};

@rxConnect(props$ => {
  const actions = {
    validateField$: new Subject(),
    validateForm$: new Subject()
  };

  return [
    Observable::ofActions(actions),
    actions.validateField$.pipe(
      pluck(0),
      map(e => {
        const { rules } = props$.value;
        const errors = runRulesOnField(rules, e);

        return { ...errors };
      })
    ),
    actions.validateForm$.pipe(
      pluck(0),
      map(e => {
        if (e && e.preventDefault) {
          e.preventDefault();
        }
        const { rules } = props$.value;
        const errors = runRulesOnAllFields(rules, e);
        return { ...errors, isValid: !Object.keys(errors).length };
      }),
      startWith({ isValid: false })
    )
  ];
})
class Validate extends React.Component {
  static defaultProps = {
    validateForm: () => {},
    validateField: () => {},
    rules: {},
    isValid: false
  };
  static propTypes = {
    children: PropTypes.func.isRequired,
    validateForm: PropTypes.func,
    validateField: PropTypes.func,
    rules: PropTypes.shape({}),
    isValid: PropTypes.bool
  };

  render() {
    const { validateField, validateForm, isValid } = this.props;

    return this.props.children({
      onSubmit: validateForm,
      onBlur: validateField,
      onChange: validateField,
      isValid,
      ...this.props
    });
  }
}

export default Validate;
