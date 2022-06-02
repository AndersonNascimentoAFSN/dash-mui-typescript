import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // Icon
} from '@mui/material';

interface IListItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  handleClick: (() => void) | undefined;
}

export const ListItemLink = (props: IListItemProps) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(props.to);
  const match = useMatch({ path: resolvedPath.pathname, end: false});

  const handleClick = () => {
    navigate(props.to);
    props.handleClick?.();
  };
  return (
    <ListItemButton onClick={handleClick} selected={!!match}>
      <ListItemIcon>
        {/* <Icon>home</Icon> */}
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.label} />
    </ListItemButton>
  );
};