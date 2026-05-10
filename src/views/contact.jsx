import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Input,
  Typography,
  TextField,
  Button,
  Fade,
  InputLabel,
} from "@mui/material";
import HomeLayout from "../layouts/homeLayout.jsx";
import palette from "../theme/palette.jsx";
import fonts from "../theme/fonts.jsx";
import BodyHeader from "../components/BodyHeader.jsx";
import BodyCover from "../components/BodyCover.jsx";
import { useBear } from "../store/testZustand.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { createContact } from "../api/base_api.jsx";
import Swal from "sweetalert2";

function Contact() {
  const count = useBear((state) => state.bears);
  const increasePopulation = useBear((state) => state.increasePopulation);
  const removeAllBears = useBear((state) => state.removeAllBears);
  const updateBears = useBear((state) => state.updateBears);

  const [isLoading, setIsLoading] = useState(false);

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      if (
        formulario.apellido == "" ||
        formulario.nombre == "" ||
        formulario.email == "" ||
        formulario.telefono == "" ||
        formulario.mensaje == ""
      ) {
        Swal.fire({
          title: "Formulario incompleto",
          text: "Debes completar toda la información",
          icon: "error",
          timer: 2000,
        });
        return;
      }
      const response = await createContact(formulario);
      Swal.fire({
        title: "Mensaje Enviado",
        text: "Pronto nos pondremos en contacto contigo.",
        icon: "success",
        timer: 2000,
      });
    } catch (error) {
        Swal.fire({
          title: "Error en el envío",
          text: "Se ha generado un error en el servidor.",
          icon: "error",
          timer: 2000,
          confirmButtonText: 'Cool',
          theme: 'material-ui'
        });
      setFormulario({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeLayout>
      {BodyCover("CONTACTO", "¿EN QUÉ PODEMOS AYUDARTE?")}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: palette.primary,
        }}
      >
        <Fade in={true} timeout={2000}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: { lg: "50%", xs: "90%" },
              paddingY: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", xs: "column" },
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  mt: { lg: 0, xs: 2 },
                  mx: 1,
                }}
              >
                <InputLabel
                  sx={{
                    justifyContent: "left",
                    textAlign: "left",
                    fontWeight: "bold",
                    m: { lg: "10px", xs: "0px" },
                  }}
                >
                  NOMBRE
                </InputLabel>
                <TextField
                  placeholder="Ej. Cristian"
                  variant="standard"
                  type="text"
                  value={formulario.nombre || ""}
                  onChange={(e) =>
                    setFormulario({ ...formulario, nombre: e.target.value })
                  }
                  sx={{
                    width: "100%",
                    m: { lg: "10px", xs: "0px" },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  mt: { lg: 0, xs: 2 },
                  mx: 1,
                }}
              >
                <InputLabel
                  sx={{
                    justifyContent: "left",
                    textAlign: "left",
                    fontWeight: "bold",
                    m: { lg: "10px", xs: "0px" },
                  }}
                >
                  APELLIDO
                </InputLabel>
                <TextField
                  placeholder="Ej. Rivera"
                  variant="standard"
                  type="text"
                  value={formulario.apellido || ""}
                  onChange={(e) =>
                    setFormulario({ ...formulario, apellido: e.target.value })
                  }
                  sx={{
                    width: "100%",
                    m: { lg: "10px", xs: "0px" },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", xs: "column" },
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  mt: { lg: 0, xs: 2 },
                  mx: 1,
                }}
              >
                <InputLabel
                  sx={{
                    justifyContent: "left",
                    textAlign: "left",
                    fontWeight: "bold",
                    m: { lg: "10px", xs: "0px" },
                  }}
                >
                  CORREO
                </InputLabel>
                <TextField
                  placeholder="Ej. cristian@gmail.com"
                  variant="standard"
                  type="email"
                  value={formulario.email || ""}
                  onChange={(e) =>
                    setFormulario({ ...formulario, email: e.target.value })
                  }
                  sx={{
                    width: "100%",
                    m: { lg: "10px", xs: "0px" },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  mt: { lg: 0, xs: 2 },
                  mx: 1,
                }}
              >
                <InputLabel
                  sx={{
                    justifyContent: "left",
                    textAlign: "left",
                    fontWeight: "bold",
                    m: { lg: "10px", xs: "0px" },
                  }}
                >
                  TELEFONO
                </InputLabel>
                <TextField
                  placeholder="Ej. +569 1234 5678"
                  variant="standard"
                  type="tel"
                  value={formulario.telefono || ""}
                  onChange={(e) =>
                    setFormulario({ ...formulario, telefono: e.target.value })
                  }
                  sx={{
                    width: "100%",
                    m: { lg: "10px", xs: "0px" },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", xs: "column" },
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  mt: { lg: 0, xs: 2 },
                  mx: 1,
                }}
              >
                <InputLabel
                  sx={{
                    justifyContent: "left",
                    textAlign: "left",
                    fontWeight: "bold",
                    m: { lg: "10px", xs: "0px" },
                  }}
                >
                  MENSAJE
                </InputLabel>
                <TextField
                  placeholder="Ej. Mensaje"
                  variant="standard"
                  type="text"
                  value={formulario.mensaje || ""}
                  onChange={(e) =>
                    setFormulario({ ...formulario, mensaje: e.target.value })
                  }
                  multiline
                  rows={4}
                  sx={{
                    width: "100%",
                    m: { lg: "10px", xs: "0px" },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { lg: "row", xs: "column" },
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  mt: { lg: 0, xs: 2 },
                  mx: 1,
                }}
              >
                <Button
                  variant="contained"
                  disabled={isLoading}
                  color="error"
                  onClick={handleSubmit}
                  sx={{
                    width: "100%",
                    m: { lg: "10px", xs: "0px" },
                    fontWeight: "bold",
                  }}
                >
                  {isLoading ? "ENVIANDO" : "ENVIAR"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </HomeLayout>
  );
}

export default Contact;
