import { Box, Typography } from "@mui/material";
import palette from "../theme/palette";
import fonts from "../theme/fonts";
import barberia from "../assets/generated.PNG";

export default function BodyCover(titulo, subtitulo) {
  return (
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
              paddingY: { lg: "0px", xs: "10px" },
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
                color: palette.primary,
                width: { lg: "60%", xs: "90%" },
                fontWeight: "bold",
                zIndex: 10,
                textAlign: { lg: "end", xs: "center" },
              }}
            >
              {titulo}
            </Typography>
            <Typography
              variant="h3"
              fontFamily="fantasy"
              sx={{
                color: palette.dangerPrimary,
                width: { lg: "60%", xs: "90%" },
                zIndex: 10,
                textAlign: { lg: "end", xs: "center" },
              }}
            >
              {subtitulo}
            </Typography>
          </Box>
        </Box>
  );
}
