import './App.css';
import "./components/Header";
import Header from "./components/Header.js";
import Meme from "./components/Meme.js"
function App() {
  return (
    <div className="App">
        <Header />
        <Meme />
    </div>
  );
}

export default App;
