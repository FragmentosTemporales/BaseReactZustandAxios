import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

      </Routes>
  </HashRouter>
  );
}

export default App;