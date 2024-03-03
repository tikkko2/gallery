import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home from "./components/home/Home";
import { History } from "./components/history/History";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/History" element={<History />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
