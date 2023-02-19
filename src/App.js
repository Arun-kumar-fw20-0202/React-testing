import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { InputTodo } from './Components/InputTodo';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <br />
      <InputTodo />
    </div>
  );
}

export default App;
