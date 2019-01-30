import React, { Fragment, Component } from "react";
import { storiesOf } from "@storybook/react";
import { Button, InputMasked } from "../src/index";

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
        <InputMasked
          maskChar={null}
          mask="****–****–****–****"
          id="sticker"
          placeholder="Please add your Emergency sticker code here."
          label="Emergency sticker unique code"
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

storiesOf("InputMasked", module)
  .add("basic", () => (
    <InputMasked
      mask="****–****–****–****"
      id="sticker"
      placeholder="Please add your Emergency sticker code here."
      label="Emergency sticker unique code"
    />
  ))
  .add("with placeholderMask", () => (
    <InputMasked
      mask="****–****–****–****"
      id="sticker"
      placeholder="Please add your Emergency sticker code here."
      label="Emergency sticker unique code"
      maskChar="_"
    />
  ))
  .add("with focus on click", () => <Focus />);
