/* eslint-disable react/prop-types */

import Smile from "../Smile/Smile";

const Smiles = ({ emojis, votes, onVote, showResults }) => {
  return (
    <ul className="d-flex gap-5 list-unstyled">
      {emojis.map((emoji, index) => (
        <Smile
          key={index}
          emoji={emoji}
          votes={votes[index]} // Кількість голосів для кожного смайлика
          onVote={() => onVote(index)}
          showResults={showResults}
        />
      ))}
    </ul>
  );
};

export default Smiles;
