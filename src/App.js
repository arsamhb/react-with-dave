import logo from "./logo.svg";
import "./App.css";

function App() {
  
  const handleRandomName = () => {
    const names = ["arsam","navid","hesam"];
    const intNum = Math.floor(Math.random()*3)
    return names[intNum]
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is {handleRandomName()}'s code.</p>
      </header>
    </div>
  );
}

export default App;
