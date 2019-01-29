import React, { Fragment, Component } from "react";
import { storiesOf } from "@storybook/react";
import { Button, InputMask } from "../src/index";

class Focus extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <Fragment>
        <InputMask
          placeholderChar="-"
          mask="1111 1111 1111 1111"
          id="card"
          placeholder="Please add your card number"
          label="Card Number"
          rel={this.textInput}
        />
        <Button
          style={{ width: "100%", marginTop: 12 }}
          onClick={this.focusTextInput}
        >
          Focus
        </Button>
      </Fragment>
    );
  }
}

storiesOf("InputMask", module)
  .add("basic", () => (
    <InputMask
      mask="1111-1111-1111-1111"
      id="card"
      placeholder="Please add your card number"
      label="Card Number"
    />
  ))
  .add("with placeholderMask", () => (
    <InputMask
      mask="1111 1111 1111 1111"
      id="card"
      placeholder="Please add your card number"
      label="Card Number"
      placeholderChar="-"
      defaultValue="John Doe"
    />
  ))
  .add("with focus on click", () => <Focus />);
