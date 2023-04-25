import './App.css';
// import the necessary components from the react-router-dom package
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// import the components from the pages folder that will act as each page
// it's best to keep all pages in their own folder
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  // everything in your app should be inside the BrowserRouter component
  return (
    <BrowserRouter>
      {/* any content to be displayed in the app component will show up on every page
          should mainly be used for the nav bar and footer */}
      <nav>
        {/* the Link components will navigate you to the page specified in the 'to' attribute */}
        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/contact" > Contact </Link>
      </nav>

      {/* the Routes component wraps around all of the page routes in your app */}
      <Routes>
        {/* you specify each page and what component to render on that page in the Route component */}
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/about" element={ <About /> } ></Route>
        <Route path="/contact" element={ <Contact /> } ></Route>

      </Routes>
      
      {/* the footer will appear on every page, just like the nav bar */}
      <footer>
        <p>This is my footer</p>
      </footer>

    </BrowserRouter>
  );
}

export default App;
