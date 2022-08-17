import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
