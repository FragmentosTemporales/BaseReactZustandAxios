import { Box, Fade, Typography } from "@mui/material";
import palette from "../theme/palette";
import fonts from "../theme/fonts";
import barberia from "../assets/generated.PNG";

export default function BodyCover(titulo, subtitulo) {
  return (
    <Fade in={true} timeout={2000}>
      <Box
        sx={{
          backgroundImage: `url(${barberia})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            paddingY: { lg: "10px", xs: "10px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            // height: { lg: "100px", xs: "150px" },
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Fade in={true} timeout={3000}>
            <Typography
              variant="h5"
              fontFamily={fonts.primary}
              sx={{
                color: palette.primary,
                width: { lg: "60%", xs: "90%" },
                fontWeight: "bold",
                zIndex: 10,
                textAlign: { lg: "end", xs: "center" },
              }}
            >
              {titulo}
            </Typography>
          </Fade>
          <Fade in={true} timeout={4000}>
            <Typography
              variant="h3"
              fontFamily={fonts.secondary}
              sx={{
                color: "#c0a062",
                width: { lg: "60%", xs: "90%" },
                zIndex: 10,
                textAlign: { lg: "end", xs: "center" },
                // WebkitTextStroke: `0.5px ${palette.primary}`,
              }}
            >
              {subtitulo}
            </Typography>
          </Fade>
        </Box>
      </Box>
    </Fade>
  );
}
