/* eslint-disable react/prop-types */
import { Component } from "react";
import Smile from "../Smile/Smile";

class Smiles extends Component {
  render() {
    return (
      <ul className="d-flex gap-5 list-unstyled">
        {this.props.emojis.map((emoji, index) => (
          <Smile
            key={index}
            emoji={emoji}
            votes={this.props.votes[index]} // Кількість голосів для кожного смайлика
            onVote={() => this.props.onVote(index)}
            showResults={this.props.showResults}
          />
        ))}
      </ul>
    );
  }
}

export default Smiles;
