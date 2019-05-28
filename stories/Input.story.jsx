import React, { Fragment, Component, useState } from "react";
import { storiesOf } from "@storybook/react";
import { Input, Button } from "../src/index";

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
        <Input
          id="name"
          placeholder="Please add your name"
          label="First name"
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

storiesOf("Input", module)
  .add("basic", () => (
    <Input id="name" placeholder="Please add your name" label="First name" />
  ))
  .add("default value", () => (
    <Input
      placeholder="Enter your name"
      label="Your name"
      id="name"
      defaultValue="John Doe"
    />
  ))
  .add("onChange handler", () => {
    const OnChangeExample = () => {
      const [word, onWordChange] = useState("");

      return (
        <Fragment>
          <Input
            id="word-input"
            placeholder="enter a word"
            onChange={e => onWordChange(e.target.value)}
          />
          <span>Your text backwards is: {[...word].reverse()}</span>
        </Fragment>
      );
    };
    return <OnChangeExample />;
  })
  .add("icon left", () => (
    <Input
      iconName="email"
      id="email"
      placeholder="Email"
      label="Email"
      type="text"
    />
  ))
  .add("with focus on click", () => <Focus />);
