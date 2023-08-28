import './App.css';
import Home from "./pages/Home/home";
import Nav from "./components/Nav/Nav"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    // Navigation goes in here.
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
