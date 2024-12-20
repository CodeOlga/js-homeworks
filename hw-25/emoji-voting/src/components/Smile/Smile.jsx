/* eslint-disable react/prop-types */
import { Component } from "react";

class Smile extends Component {
  render() {
    return (
      <li className="d-inline-block text-center mx-3">
        <button
          className="border-0 bg-transparent fs-1"
          onClick={this.props.onVote}
        >
          {this.props.emoji}
        </button>
        {this.props.showResults && (
          <p className="d-block mt-2">{this.props.votes}</p>
        )}
      </li>
    );
  }
}

export default Smile;
