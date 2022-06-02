import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/index';
import { useDrawerContext } from '../shared/contexts';
import HomeIcon from '@mui/icons-material/Home';

export function AppRoutes() {
  const { handleSetDrawerOptions } = useDrawerContext();

  useEffect(() => {
    handleSetDrawerOptions([
      {
        label: 'Página Inicial',
        icon: <HomeIcon />,
        path: '/',
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
