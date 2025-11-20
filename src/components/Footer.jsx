import { Box, Divider, Typography } from "@mui/material";
import palette from "../theme/palette";
import fonts from "../theme/fonts";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#090908",
        marginTop: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
            alignItems: "center",
            width: "80%",
          }}
        >
          {/* CONTACTO */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "33%" },
              textAlign: "left",
              display: "flex",
              alignContent: "start",
              flexDirection: "column",
              px: 2,
              py: 1,
              minHeight: "200px",
            }}
          >
            <Typography
              variant="h6"
              fontFamily={fonts.primary}
              sx={{ color: "white", fontWeight: "bold" }}
            >
              CONTACTO
            </Typography>
            <Divider
              sx={{
                backgroundColor: "white",
                height: "1px",
                width: "100%",
                my: 1,
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <LocationOnIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                Av. Siempre Viva 123, Springfield
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <DirectionsCarIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                Contamos con estacionamiento
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <EmailIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                cristian.rivera3284@gmail.com
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <PhoneInTalkIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                +56 9 63410066
              </Typography>
            </Box>
          </Box>

          {/* HORARIO */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "33%" },
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              px: 2,
              py: 1,
              minHeight: "200px",
            }}
          >
            <Typography
              variant="h6"
              fontFamily={fonts.primary}
              sx={{ color: "white", fontWeight: "bold" }}
            >
              HORARIOS DE ATENCIÓN
            </Typography>
            <Divider
              sx={{
                backgroundColor: "white",
                height: "1px",
                width: "100%",
                my: 1,
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <AccessTimeFilledIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                Lunes a Viernes: 10:00 AM - 8:00 PM
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <AccessTimeFilledIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                Sábado: 10:00 AM - 6:00 PM
              </Typography>
            </Box>
          </Box>

          {/* INFORMACION */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "33%" },
              textAlign: "left",
              px: 2,
              py: 1,
              minHeight: "200px",
            }}
          >
            <Typography
              variant="h6"
              fontFamily={fonts.primary}
              sx={{ color: "white", fontWeight: "bold" }}
            >
              INFORMACIÓN
            </Typography>
            <Divider
              sx={{
                backgroundColor: "white",
                height: "1px",
                width: "100%",
                my: 1,
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <EmailIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                CONTACTANOS
              </Typography>
            </Box>

            <Box
              component={Link}
              to="/reserva"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <InsertInvitationIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                AGENDA TU CITA
              </Typography>
            </Box>

            <Box
              component={Link}
              to="/privacidad"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pt: 1,
              }}
            >
              <LockIcon
                sx={{ color: palette.dangerPrimary, marginRight: "10px" }}
              />
              <Typography
                variant="body1"
                fontFamily={fonts.primary}
                sx={{ color: "white" }}
              >
                POLITICA DE PRIVACIDAD
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            border: "1px solid white",
            minHeight: "200px",
            justifyContent: "center",
          }}
        >
          <Box sx={{ color: "white" }}>ACA IRA UN MAPA</Box>
        </Box>
      </Box>
    </footer>
  );
};
