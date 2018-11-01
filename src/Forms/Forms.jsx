import React, { Component } from "react";
import PropTypes from "prop-types";
import Schema from "async-validator";
import { FlexGrid, Row, Col } from "../index";

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    submit: PropTypes.func.isRequired,
    select: PropTypes.func,
    rules: PropTypes.shape({}),
    horizontal: PropTypes.bool
  };

  static defaultProps = {
    rules: {},
    horizontal: false,
    select: () => {}
  };

  constructor(props) {
    super(props);

    this.formValidator = this.formValidator.bind(this);
  }

  formValidator(e) {
    e.preventDefault();
    const { submit, rules } = this.props;
    const elements = Array.from(e.target.elements);
    const ignoredElements = ["button", "submit", "reset"];
    const validated = [];

    elements
      .filter(element => !ignoredElements.includes(element.type))
      .forEach(element => {
        const { value, id } = element;
        const field = { [id]: value };
        const rule = rules[id] ? rules[id] : {};
        const validator = new Schema({ [id]: rule });

        validator.validate(field, errors => {
          const error = errors ? errors[0] : null;
          validated.push({ id, error });
        });
      });

    submit(validated);
  }

  render() {
    const { horizontal, children, select } = this.props;
    const form = horizontal ? <Row> {children} </Row> : <Col> {children} </Col>;

    return (
      <FlexGrid>
        <form
          onChange={e => select(e.target.value)}
          onSubmit={e => this.formValidator(e)}
        >
          {form}
        </form>
      </FlexGrid>
    );
  }
}
