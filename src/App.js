import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {


  return (
    <BrowserRouter>

      <nav>
        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/contact" > Contact </Link>
      </nav>

      <Routes>

        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/about" element={ <About /> } ></Route>
        <Route path="/contact" element={ <Contact /> } ></Route>

      </Routes>

      <footer>
        <p>This is my footer</p>
      </footer>

    </BrowserRouter>
  );
}

export default App;
