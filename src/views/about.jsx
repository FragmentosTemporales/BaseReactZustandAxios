import { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import HomeLayout from '../layouts/homeLayout.jsx';
import palette from '../theme/palette.jsx';
import { useBear } from '../store/testZustand.jsx';

function About() {
  const count = useBear((state) => state.bears);
  const increasePopulation = useBear((state) => state.increasePopulation);
  const removeAllBears = useBear((state) => state.removeAllBears);
  const updateBears = useBear((state) => state.updateBears);

  useEffect(() => {
    console.log(`Número de osos en la tienda: ${count}`);
  }, [count]);

  return (
    <HomeLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: palette.textPrimary }}>
          Acerca de Mi Aplicación
        </Typography>
        <Typography variant="body1" sx={{ color: palette.textMuted, mb: 4 }}>
          Esta es una aplicación de ejemplo utilizando React y Material-UI con una paleta de colores personalizada.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={increasePopulation}
          sx={{ mr: 2 }}
        >
          Aumentar Oso
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={removeAllBears}
        >
          Eliminar Todos los Osos
        </Button>
        <Typography variant="h6" sx={{ mt: 4, color: palette.textPrimary }}>
          Número de osos en la tienda: {count}
        </Typography>
      </Box>
    </HomeLayout>
  );
}

export default About;
