import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import About from "./pages/about";
import Around from "./pages/around";
import Gallery from "./pages/gallery";
import Game from "./pages/game";
import TravelCall from "./pages/travel-call";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Gallery />}/>
          <Route path="/around" element={<Around />}/>
          <Route path="/travel-call" element={<TravelCall />}/>
          <Route path="/game" element={<Game />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
