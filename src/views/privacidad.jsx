import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeLayout from "../layouts/homeLayout.jsx";
import palette from "../theme/palette.jsx";
import fonts from "../theme/fonts.jsx";
import { useBear } from "../store/testZustand.jsx";

import BodyHeader from "../components/BodyHeader.jsx";
import BodyCover from "../components/BodyCover.jsx";

function Privacidad() {
  const count = useBear((state) => state.bears);
  const increasePopulation = useBear((state) => state.increasePopulation);
  const removeAllBears = useBear((state) => state.removeAllBears);
  const updateBears = useBear((state) => state.updateBears);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeLayout>
      {BodyCover("NUESTRA POLÍTICA","ES TU PRIVACIDAD")}
      {BodyHeader("RESPETAMOS TU PRIVACIDAD")}

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
              marginY: "30px",
              width: "80%",
            }}
          >
            En Barbería Chile, respetamos tu privacidad y no compartimos datos personales con terceros.
          </Typography>
        </Box>
    </HomeLayout>
  );
}

export default Privacidad;
