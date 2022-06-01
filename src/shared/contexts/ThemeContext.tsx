import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { LightTheme, DarkTheme } from '../theme';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

type themeName = 'light' | 'dark';

type AppProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => useContext(ThemeContext);

export function AppThemeProvider({ children }: AppProviderProps) {
  const [themeName, setThemeName] = useState<themeName>('light');

  const toggleTheme = useCallback(() => {
    setThemeName((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
