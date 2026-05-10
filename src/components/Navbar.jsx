import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import palette from "../theme/palette";
import fonts from "../theme/fonts";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const navItems = [
    { label: "NUESTRO EQUIPO", path: "/equipo" },
    { label: "SOBRE NOSOTROS", path: "/about" },
    { label: "INICIO", path: "/" },
    { label: "RESERVA", path: "/reserva" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#302c2b",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid #7c726f",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    flexGrow: 1,
                    textTransform: "none",
                    fontFamily: fonts.primary,
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    color: palette.primary,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: palette.secondary,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer para móviles */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button component={Link} to={item.path} key={item.path}>
                <ListItemText
                  primary={item.label}
                  sx={{ fontFamily: fonts.primary }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
