import { Typography, Button } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../../shared/contexts';

export function Home() {
  // const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Typography>Hello World Home!</Typography>
      {/* <Button variant="contained" color="primary" onClick={toggleTheme}> */}
      <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
        Clique Aqui
      </Button>
    </>
  );
}
