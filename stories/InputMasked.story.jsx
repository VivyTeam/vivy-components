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
          placeholderChar=" "
          mask="aaaa – aaaa – aaaa – aaaa"
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
      mask="aaaa – aaaa – aaaa – aaaa"
      id="sticker"
      placeholder="Please add your Emergency sticker code here."
      label="Emergency sticker unique code"
    />
  ))
  .add("with placeholderMask", () => (
    <InputMasked
      mask="aaaa – aaaa – aaaa – aaaa"
      id="sticker"
      placeholder="Please add your Emergency sticker code here."
      label="Emergency sticker unique code"
      placeholderChar="-"
    />
  ))
  .add(
    "with custom character check in mask",
    () => (
      <InputMasked
        mask="wwww – wwww – wwww – wwww"
        id="sticker"
        placeholder="Please add your Emergency sticker code here."
        label="Emergency sticker unique code"
        placeholderChar="-"
        formatCharacters={{
          w: {
            validate: char => /\w/.test(char)
          }
        }}
      />
    ),
    { info: "When formatCharacters is passed to the component as property, then an object needs to be given as property. Here is the object key is 'w'. 'w' then can be used in the mask with a custom regex expression." }
  )
  .add("with focus on click", () => <Focus />);
