import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeLayout from "../layouts/homeLayout.jsx";
import palette from "../theme/palette.jsx";
import { useBear } from "../store/testZustand.jsx";
import barberia from "../assets/generated.PNG";

function Home() {
  return (
    <HomeLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${barberia})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "80vh",
            display: "flex",
            flexDirection: {lg: "row", xs: "column"},
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100px",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "300px",
                height: "60px",
                backgroundColor: "#d32f2f",
                color: "#fff",
                padding: "12px 24px",
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                "&:hover": {
                  backgroundColor: "#b71c1c",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.6)",
                },
                zIndex: 10,
              }}
            >
              AGENDA AHORA
            </Button>
          </Box>
          <Box
            sx={{
                paddingY: {lg: "0px", xs: "10px"},
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100px",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <Typography
              variant="h5"
              fontFamily="monospace"
              sx={{
                color: palette.primaryDark,
                width: {lg: "60%", xs: "90%"},
                fontWeight: "bold",
                zIndex: 10,
                textAlign: {lg: "end", xs: "center"},
              }}
            >
              REVIVE EL RITUAL
            </Typography>
            <Typography
              variant="h3"
              fontFamily="fantasy"
              sx={{
                color: palette.danger,
                width: {lg: "60%", xs: "90%"},
                zIndex: 10,
                textAlign: {lg: "end", xs: "center"},
              }}
            >
              DE UN BUEN CORTE
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            fontFamily="fantasy"
            sx={{
              color: palette.primary,
              textAlign: "center",
              marginY: "20px",
              width: "80%",
            }}
          >
            NUESTROS SERVICIOS
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            fontFamily="fantasy"
            sx={{
              color: palette.textMuted,
              textAlign: "center",
              marginY: "20px",
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
