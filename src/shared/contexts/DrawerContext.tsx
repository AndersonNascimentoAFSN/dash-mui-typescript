import {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

type DrawerProviderProps = {
  children: React.ReactNode;
};

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => useContext(DrawerContext);

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(true);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prevStateDrawerOpen) => !prevStateDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider
      value={{ isDrawerOpen, toggleDrawerOpen}}
    >
      {children}
    </DrawerContext.Provider>
  );
}
