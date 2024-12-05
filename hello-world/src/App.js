import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import InputNama from './inputNama';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Belajar React JS yh 😁👍</h1>
        <div className='container'>
          <div>
            <Counter />
          </div>
          <div>
            <InputNama />
          </div>
          <div>
            <Calculator />
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
