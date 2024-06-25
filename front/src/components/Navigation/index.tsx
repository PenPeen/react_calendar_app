import { FC } from 'react';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import dayjs from 'dayjs';

import {
  StyledDatePicker,
  styledAppImage,
  styledToolbar,
  styledTypography,
} from './style';

import { useCalendar } from '@/hooks/useCalendarAction';
import { useCurrentCalendarState } from '@/hooks/useCurrentCalendarState';

const Navigation: FC = () => {
  const { dispatchPrevMonth, dispatchNextMonth, dispatchSetMonth } =
    useCalendar();
  const calendar = useCurrentCalendarState();
  const calendarDate = dayjs(new Date(calendar.year, calendar.month - 1));

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
        <Tooltip title="前の月" placement="bottom">
          <IconButton size="small" onClick={dispatchPrevMonth}>
            <ArrowBackIos />
          </IconButton>
        </Tooltip>
        <Tooltip title="次の月" placement="bottom">
          <IconButton size="small" onClick={dispatchNextMonth}>
            <ArrowForwardIos />
          </IconButton>
        </Tooltip>
        <StyledDatePicker
          value={calendarDate}
          onChange={dispatchSetMonth}
          format="YYYY年 M月"
          closeOnSelect={true}
        />
        <img
          src="/images/myapp.png"
          width="75"
          height="75"
          alt="penpeen app icon"
          style={styledAppImage}
        />
      </Toolbar>
    </>
  );
};

export default Navigation;
