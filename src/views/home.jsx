import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeLayout from "../layouts/homeLayout.jsx";
import palette from "../theme/palette.jsx";

import BodyHeader from "../components/BodyHeader.jsx";
import BodyCover from "../components/BodyCover.jsx";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >

        {BodyCover("REVIVE EL RITUAL","DE UN BUEN CORTE")}
        {BodyHeader("NUESTROS SERVICIOS")}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: palette.primary,
          }}
        >
        <Typography
          variant="h6"
          fontStyle="italic"
          fontFamily="fantasy"
          sx={{
            color: palette.textMuted,
            textAlign: "justify",
            marginTop: "20px",
            width: "80%",
          }}
        >
            En nuestra barbería, cada corte es una experiencia pensada para
            resaltar tu estilo personal. Combinamos técnicas tradicionales,
            conocimiento experto y productos de calidad internacional para
            ofrecerte un servicio a medida. No solo te vas con un buen look: te
            llevas el ritual, el detalle y el carácter que hacen que quieras
            volver.
          </Typography>
        </Box>
      </Box>
    </HomeLayout>
  );
}

export default Home;
