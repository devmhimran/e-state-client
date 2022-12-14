import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import PropertyDetail from './Component/PropertyDetail/PropertyDetail';
import Loading from './Component/Loading/Loading';

function App() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/load" element={<Loading></Loading>} />
        <Route path="/property/:id" element={<PropertyDetail></PropertyDetail>} />
      </Routes>
    </div>
  );
}

export default App;
