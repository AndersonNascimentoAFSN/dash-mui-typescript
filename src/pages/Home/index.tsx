import { Typography, Button } from '@mui/material';
import { useAppThemeContext } from '../../shared/contexts';

export function Home() {
  const { toggleTheme } = useAppThemeContext();
  return (
    <>
      <Typography>Hello World Home!</Typography>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Clique Aqui
      </Button>
    </>
  );
}
