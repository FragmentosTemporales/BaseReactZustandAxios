import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeLayout from "../layouts/homeLayout.jsx";
import palette from "../theme/palette.jsx";
import { useBear } from "../store/testZustand.jsx";

import BodyHeader from "../components/BodyHeader.jsx";
import BodyCover from "../components/BodyCover.jsx";

function Reserva() {
  const count = useBear((state) => state.bears);
  const increasePopulation = useBear((state) => state.increasePopulation);
  const removeAllBears = useBear((state) => state.removeAllBears);
  const updateBears = useBear((state) => state.updateBears);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeLayout>
      {BodyCover("HAZ TU RESERVA","EN LÍNEA RÁPIDO Y FÁCIL")}
      {BodyHeader("RESERVA TU CITA CON NOSOTROS")}
    </HomeLayout>
  );
}

export default Reserva;
