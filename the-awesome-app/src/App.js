import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';
import Search from "./components/Search";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              React Training
            </a>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-12">
            <Routes>
              <Route path="/home" element={<Hello message="Hello World" color="slateblue"/>} />
              <Route path="/products" element={<ListProducts/>} />
              <Route path="/counter" element={<Counter initCount={7}/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
        </main>


      </div>
    </Router>
  );
}

export default App;
