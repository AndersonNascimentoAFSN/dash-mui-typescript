import {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  handleSetDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

type DrawerProviderProps = {
  children: React.ReactNode;
};

interface IDrawerOption {
  icon: React.ReactNode;
  path: string;
  label: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => useContext(DrawerContext);

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prevStateDrawerOpen) => !prevStateDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawerOpen,
        drawerOptions,
        handleSetDrawerOptions
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
