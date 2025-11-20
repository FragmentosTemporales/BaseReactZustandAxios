import { Box, Typography } from "@mui/material";
import palette from "../theme/palette";
import fonts from "../theme/fonts";

export default function BodyHeader(titulo) {
  return (
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
        variant="h3"
        fontFamily={fonts.secondary}
        sx={{
          color: palette.primaryDark,
          textAlign: "center",
          marginY: "15px",
          width: "80%",
        }}
      >
        {titulo}
      </Typography>
    </Box>
  );
}
