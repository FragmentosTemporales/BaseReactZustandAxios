import { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import HomeLayout from "../layouts/homeLayout.jsx";
import palette from "../theme/palette.jsx";
import fonts from "../theme/fonts.jsx";
import BodyHeader from "../components/BodyHeader.jsx";
import BodyCover from "../components/BodyCover.jsx";

import mustache from "../assets/barba.png";
import navaja from "../assets/navaja.png";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicios = [
    { nombre: "Corte de pelo classic", valor: "$15.000", avatar: mustache },
    { nombre: "Perfilado de barba classic", valor: "$15.000", avatar: navaja },
    { nombre: "Afeitado classics", valor: "$15.000", avatar: mustache },
    {
      nombre: "Corte de pelo, afeitado o perfilado classic",
      valor: "$15.000",
      avatar: navaja,
    },
    { nombre: "Premium the classic", valor: "$15.000", avatar: mustache },
    {
      nombre: "Ultra premium the classic (3 opciones)",
      valor: "$15.000",
      avatar: navaja,
    },
    { nombre: "Masaje capilar", valor: "$15.000", avatar: mustache },
    { nombre: "Perfilado de cejas", valor: "$15.000", avatar: navaja },
    { nombre: "Exfolación facial", valor: "$15.000", avatar: mustache },
    { nombre: "Camuflaje de canas", valor: "$15.000", avatar: navaja },
    { nombre: "Retoque de vello facial", valor: "$15.000", avatar: mustache },
  ];

  return (
    <HomeLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {BodyCover("REVIVE EL RITUAL", "DE UN BUEN CORTE")}
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
            fontFamily={fonts.secondary}
            sx={{
              color: palette.textMuted,
              textAlign: "center",
              marginY: "10px",
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: palette.primary,
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 6, md: 7 }}
            columnSpacing={{ xs: 2.5, sm: 3, md: 3.5, lg: 4 }}
            sx={{
              width: { lg: "80%", md: "90%", xs: "100%" },
              justifyContent: "center",
              mb: 5,
              transition: "max-width .4s ease",
              backgroundColor: palette.primary,
            }}
          >
            {servicios.map((servicio, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                key={index}
                sx={{
                  display: "flex",
                  minHeight: "70%",
                  minWidth: { lg: "250px", xs: "90%" },
                  maxWidth: "90%",
                  justifyContent: "center",
                }}
              >
                <Card
                  elevation={3}
                  sx={{
                    textDecoration: "none",
                    minHeight: "70%",
                    width: 450, // ancho fijo
                    maxWidth: "100%", // nunca exceder contenedor
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    // backgroundColor:"#a7a6a3",
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(6px)",
                    transition: "all .35s",
                    overflow: "hidden",
                    willChange: "transform, box-shadow",
                    transformOrigin: "top center",
                    mt: 1,
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 70%)",
                      opacity: 0,
                      transition: "opacity .4s",
                      pointerEvents: "none",
                    },
                  }}
                >
                  <Avatar
                    src={servicio.avatar}
                    sx={{
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 2,
                      bgcolor: "#fff",
                      border: "2px solid #c0a062",
                      p: 1,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: "#c0a062",
                      mb: 1,
                      textAlign: "center",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: 1,
                    }}
                  >
                    {servicio.nombre}
                  </Typography>
                  <Divider
                    sx={{ mb: 1.5, borderColor: "rgba(255,255,255,0.12)" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: palette.textMuted,
                      fontSize: "0.9rem",
                      textAlign: "center",
                      fontFamily: "'Roboto Slab', serif",
                    }}
                  >
                    {servicio.valor}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </HomeLayout>
  );
}

export default Home;
