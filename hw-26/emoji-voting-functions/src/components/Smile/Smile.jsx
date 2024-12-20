/* eslint-disable react/prop-types */

const Smile = ({ onVote, emoji, showResults, votes }) => {
  return (
    <li className="d-inline-block text-center mx-3">
      <button className="border-0 bg-transparent fs-1" onClick={onVote}>
        {emoji}
      </button>
      {showResults && <p className="d-block mt-2">{votes}</p>}
    </li>
  );
};

export default Smile;
