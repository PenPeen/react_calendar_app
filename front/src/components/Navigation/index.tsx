import { FC } from 'react';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { styledToolbar, styledTypography } from './style';

import calendarSlice from '@/stores/calendar';

const { setNextMonth, setPrevMonth } = calendarSlice.actions;

const Navigation: FC = () => {
  const dispatch = useDispatch();
  const handlePrevMonth = () => dispatch(setPrevMonth());
  const handleNextMonth = () => dispatch(setNextMonth());

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
        <IconButton size="small" onClick={handlePrevMonth}>
          <ArrowBackIos />
        </IconButton>
        <IconButton size="small" onClick={handleNextMonth}>
          <ArrowForwardIos />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default Navigation;
