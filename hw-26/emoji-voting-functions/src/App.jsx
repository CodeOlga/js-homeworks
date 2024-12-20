import { useEffect, useState } from "react";
import Smiles from "./components/Smiles/Smiles";
import Button from "./components/Button/Button";

const App = () => {
  const [votes, setVotes] = useState([0, 0, 0, 0, 0]);
  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // Отримання даних із localStorage
    const storedVotes = localStorage.getItem("votes");
    const votes = storedVotes ? JSON.parse(storedVotes) : [0, 0, 0, 0, 0]; // Всі смайлики з нулевими голосами
    setVotes(votes);
  }, []);

  const updateVotes = (newVotes) => {
    setVotes(newVotes);
    localStorage.setItem("votes", JSON.stringify(newVotes));
  };

  const incrementVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1; // Збільшуємо голос для обраного смайла
    updateVotes(newVotes);
  };

  const clearVotes = () => {
    const clearedVotes = Array(5).fill(0); // Скидаємо всі голоси
    updateVotes(clearedVotes);
    setShowResults(false);
    setWinner(null);
  };

  const calculateWinner = () => {
    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes); // Індекс смайла з максимальною кількістю голосів
    setShowResults(true);
    setWinner({ index: winnerIndex, votes: maxVotes });
  };

  const emojis = ["😊", "😂", "😎", "😍", "❤️"]; // Список смайликів

  return (
    <main className="container d-flex flex-column gap-5 align-items-center">
      <h1>Голосування за найкращий смайлик</h1>

      <Smiles
        emojis={emojis}
        votes={votes}
        onVote={incrementVote}
        showResults={showResults}
      />

      <Button
        title="Show results"
        className="btn btn-success"
        onClick={calculateWinner}
      />

      {showResults && winner && (
        <div>
          <h2>Результати голосування:</h2>
          <div className="text-center mt-4">
            <h3>Переможець:</h3> {emojis[winner.index]}
          </div>
          <p className="text-center mt-4">
            <strong>Кількість голосів:</strong> {winner.votes}
          </p>
        </div>
      )}

      <Button
        title="Delete results"
        className="btn btn-danger"
        onClick={clearVotes}
      />
    </main>
  );
};

export default App;
