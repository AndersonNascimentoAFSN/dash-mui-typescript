import {
  Drawer,
  useTheme,
  Box,
  Avatar,
  Divider,
  List,
  useMediaQuery,
} from '@mui/material';
import guilherme from '../../../assets/guilherme-dornelles.png';
import { useDrawerContext } from '../../contexts';
import { ListItemLink } from './ListItemLink';

interface SideBarProps {
  children?: React.ReactNode;
}

export function SideBar({children}: SideBarProps) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { 
    isDrawerOpen,
    toggleDrawerOpen,
    drawerOptions
  } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box 
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box 
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar 
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12),
              }}
              src={guilherme}
              alt="Foto Guilherme Dornelles"/>
          </Box>
          <Divider />

          <Box flex={1}>
            <List component="nav">
              {
                drawerOptions.map((drawerOption) => (
                  <ListItemLink 
                    key={drawerOption.path}
                    to={drawerOption.path}
                    icon={drawerOption.icon}
                    label={drawerOption.label}
                    handleClick={smDown ? toggleDrawerOpen : undefined}
                  />
                ))
              }
              {/* <ListItemLink 
                to='/'
                icon={<HomeIcon />}
                label="Página Inicial"
                handleClick={smDown ? toggleDrawerOpen : undefined}
              /> */}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box 
        height="100vh" 
        marginLeft={smDown ? 0 : theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  ); 
}
