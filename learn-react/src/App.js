import "./App.css";
import LazyLoad from "./component/lazy-load";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <LazyLoad />
      </header>
    </div>
  );
}

export default App;
