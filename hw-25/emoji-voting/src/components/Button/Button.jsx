/* eslint-disable react/prop-types */
import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
