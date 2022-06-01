import { Drawer, useTheme, Box, Avatar, Divider } from '@mui/material';
import guilherme from '../../../assets/guilherme-dornelles.png';

interface SideBarProps {
  children?: React.ReactNode;
}

export function SideBar({children}: SideBarProps) {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
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
              
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  ); 
}
