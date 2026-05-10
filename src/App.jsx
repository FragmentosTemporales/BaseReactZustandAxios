import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Reserva from "./views/reserva";
import OurTeam from "./views/teamView";
import Privacidad from "./views/privacidad";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/equipo" element={<OurTeam />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
  </HashRouter>
  );
}

export default App;