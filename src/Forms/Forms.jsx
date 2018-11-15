import React, { Component } from "react";
import PropTypes from "prop-types";
import Schema from "async-validator";

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    submit: PropTypes.func.isRequired,
    select: PropTypes.func,
    rules: PropTypes.shape({}),
    ignoredFields: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    rules: {},
    select: () => {},
    ignoredFields: ["button", "submit", "reset"]
  };

  constructor(props) {
    super(props);

    this.formValidator = this.formValidator.bind(this);
  }

  formValidator(e) {
    e.preventDefault();
    const { submit, rules, ignoredFields } = this.props;
    const elements = Array.from(e.target.elements);
    const schema = new Schema(rules);
    const fields = {};

    elements
      .filter(element => !ignoredFields.includes(element.type))
      .forEach(element => {
        const { type, id, value, checked } = element;

        switch (type) {
          case "checkbox":
            fields[id] = checked;
            break;
          default:
            fields[id] = value;
        }
      });

    schema.validate(fields, (errors, validated) => submit(fields, validated));
  }

  render() {
    const { children, select } = this.props;

    return (
      <form
        onChange={e => select(e.target.value)}
        onSubmit={e => this.formValidator(e)}
      >
        {children}
      </form>
    );
  }
}
