import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import About from "./pages/about";
import Detail from "./pages/detail";
import Gallery from "./pages/gallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Gallery />}/>
          <Route path="/gallery/:name" element={<Detail />}/>
          <Route path="/about" element={<About />}/>
          {/* 
            gallery-프젝들
            gallery/xx-디테일
            about-소개
          */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
