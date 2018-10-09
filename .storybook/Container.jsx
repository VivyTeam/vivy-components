import React, { Component } from "react";

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <React.StrictMode>
        <div
          style={{
            backgroundColor: '#fafafa',
            margin: 20,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          {story()}
        </div>
      </React.StrictMode>
    );
  }
}
