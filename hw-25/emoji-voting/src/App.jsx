import { Component } from "react";
import Smiles from "./components/Smiles/Smiles";
import Button from "./components/Button/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: [], // Кількість голосів для кожного смайлика
      showResults: false,
      winner: null,
    };
  }

  componentDidMount() {
    // Отримання даних із localStorage
    const storedVotes = localStorage.getItem("votes");
    const votes = storedVotes ? JSON.parse(storedVotes) : [0, 0, 0, 0, 0]; // Всі смайлики з нулевими голосами
    this.setState({ votes });
  }

  updateVotes(newVotes) {
    this.setState({ votes: newVotes });
    localStorage.setItem("votes", JSON.stringify(newVotes));
  }

  incrementVote(index) {
    const newVotes = [...this.state.votes];
    newVotes[index] += 1; // Збільшуємо голос для обраного смайла
    this.updateVotes(newVotes);
  }

  clearVotes() {
    const clearedVotes = Array(5).fill(0); // Скидаємо всі голоси
    this.updateVotes(clearedVotes);
    this.setState({ showResults: false, winner: null });
  }

  calculateWinner() {
    const maxVotes = Math.max(...this.state.votes);
    const winnerIndex = this.state.votes.indexOf(maxVotes); // Індекс смайла з максимальною кількістю голосів
    this.setState({
      showResults: true,
      winner: { index: winnerIndex, votes: maxVotes },
    });
  }

  render() {
    const emojis = ["😊", "😂", "😎", "😍", "❤️"]; // Список смайликів

    return (
      <main className="container d-flex flex-column gap-5 align-items-center">
        <h1>Голосування за найкращий смайлик</h1>

        <Smiles
          emojis={emojis}
          votes={this.state.votes}
          onVote={this.incrementVote.bind(this)}
          showResults={this.state.showResults}
        />

        <Button
          title="Show results"
          className="btn btn-success"
          onClick={() => this.calculateWinner()}
        />

        {this.state.showResults && this.state.winner && (
          <div>
            <h2>Результати голосування:</h2>
            <div className="text-center mt-4">
              <h3>Переможець:</h3> {emojis[this.state.winner.index]}
            </div>
            <p className="text-center mt-4">
              <strong>Кількість голосів:</strong> {this.state.winner.votes}
            </p>
          </div>
        )}

        <Button
          title="Delete results"
          className="btn btn-danger"
          onClick={() => this.clearVotes()}
        />
      </main>
    );
  }
}

export default App;
