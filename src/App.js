import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ComponenteA></ComponenteA>
        </p>
      </header>
    </div>
  );
}

export default App;
