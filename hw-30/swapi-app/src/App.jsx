import Form from "./components/Form/Form";
import Data from "./components/Data/Data";
import ClearButton from "./components/ClearButton/ClearButton";

const App = () => {
  return (
    <main className="container">
      <Form />

      <Data />
      <ClearButton />
    </main>
  );
};

export default App;
