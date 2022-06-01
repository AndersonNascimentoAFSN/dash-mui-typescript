import { AppRoutes } from './routes';
import { SideBar } from './shared/components';

export function App() {
  return (
    <>
      <SideBar>
        <AppRoutes />
      </SideBar>
    </>
  );
}
