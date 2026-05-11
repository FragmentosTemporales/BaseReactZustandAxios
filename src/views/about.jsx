import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import HomeLayout from "../layouts/homeLayout.jsx";
import palette from "../theme/palette.jsx";
import fonts from "../theme/fonts.jsx";
import BodyHeader from "../components/BodyHeader.jsx";
import BodyCover from "../components/BodyCover.jsx";
import { useBear } from "../store/testZustand.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function About() {
  const count = useBear((state) => state.bears);
  const increasePopulation = useBear((state) => state.increasePopulation);
  const removeAllBears = useBear((state) => state.removeAllBears);
  const updateBears = useBear((state) => state.updateBears);

  const horarios = [
    { dia: "Lunes a Viernes", hora: "10:00 - 20:00" },
    { dia: "Sábado", hora: "10:00 - 18:00" },
    { dia: "Domingo y Festivos", hora: "Cerrado" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeLayout>
      {BodyCover("SOBRE", "NOSOTROS")}
      {BodyHeader("BIENVENIDO A NUESTRA BARBERÍA")}

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
          fontFamily={fonts.secondary}
            sx={{
              color: palette.textMuted,
              textAlign: "center",
              marginY: "10px",
              width: "80%",
            }}
        >
          En The Classic Barbershop fusionamos la elegancia atemporal de la barbería tradicional 
          con la precisión y comodidad del servicio contemporáneo. Aquí, cada corte es una obra 
          de arte ejecutada con técnicas clásicas perfeccionadas a través de generaciones, 
          complementadas con las tendencias más actuales y productos premium de clase mundial. 
          Nuestro compromiso va más allá del simple corte: nos dedicamos a realzar tu estilo 
          único, ofreciendo asesoría personalizada que considera tu perfil, estilo de vida y 
          personalidad. Sumérgete en una experiencia donde la tradición se encuentra con la 
          innovación, creando momentos memorables que te harán volver una y otra vez.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: palette.primary,
          paddingY: "10px",
        }}
      >
        {horarios.map((horario, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              marginY: "5px",
              width: "80%",
              minHeight: "10vh",
            }}
          >
            <AccessTimeIcon
              sx={{
                color: palette.dangerPrimary,
                marginRight: "10px",
                fontSize: "35px",
                fontWeight: "bold",
              }}
            />

            <Typography
              variant="h6"
              fontFamily={fonts.primary}
              sx={{
                color: palette.textMuted,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {horario.dia}: {horario.hora}
            </Typography>
          </Box>
        ))}
      </Box>
    </HomeLayout>
  );
}

export default About;
