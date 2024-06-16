import { FC } from 'react';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Toolbar, Typography } from '@mui/material';

import { styledToolbar, styledTypography } from './style';

const Navigation: FC = () => {
  return (
    <>
      <Toolbar style={styledToolbar}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="/images/calendar_icon.png"
          width="40"
          height="40"
          alt="calendar icon"
        />
        <Typography
          style={styledTypography}
          color="textSecondary"
          variant="h5"
          component="h1"
        >
          カレンダー
        </Typography>
        <IconButton size="small">
          <ArrowBackIos />
        </IconButton>
        <IconButton size="small">
          <ArrowForwardIos />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default Navigation;
