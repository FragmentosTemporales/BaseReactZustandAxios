import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import palette from "../theme/palette";
import fonts from "../theme/fonts";
import { Link } from "react-router-dom";

export default function Navbar({ onMenuClick }) {

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#302c2b",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "#7c726f",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flex: "row",
            alignItems: "center",
          }}
        >

          {/* NUESTRO EQUIPO */}
          <Box sx={{ flexGrow: 1 }}>
            <Button
              component={Link}
              to="/equipo"
              sx={{
                textTransform: "none",
                fontFamily: fonts.primary,
                fontWeight: "bold"

              }}
            >
              <Typography
                fontFamily={fonts.primary}
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: "bold",
                  color: palette.primary,
                }}
              >
                NUESTRO EQUIPO
              </Typography>
            </Button>
          </Box>

          {/* SOBRE NOSOTROS */}
          <Box sx={{ flexGrow: 1 }}>
            <Button
              component={Link}
              to="/about"
              sx={{
                textTransform: "none",
                fontFamily: fonts.primary,
              }}
            >
              <Typography
                fontFamily={fonts.primary}
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: "bold",
                  color: palette.primary,
                }}
              >
                SOBRE NOSOTROS
              </Typography>
            </Button>
          </Box>

          {/* INICIO */}
          <Box sx={{ flexGrow: 1 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                textTransform: "none",
                fontFamily: fonts.primary,
              }}
            >
              <Typography
                fontFamily={fonts.primary}
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: "bold",
                  color: palette.primary,
                }}
              >
                INICIO
              </Typography>
            </Button>
          </Box>

          {/* RESERVA */}
          <Box sx={{ flexGrow: 1 }}>
            <Button
              component={Link}
              to="/reserva"
              sx={{
                textTransform: "none",
                fontFamily: fonts.primary,
              }}
            >
              <Typography
                fontFamily={fonts.primary}
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: "bold",
                  color: palette.primary,
                }}
              >
                RESERVA
              </Typography>
            </Button>
          </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
}
