import { FC } from 'react';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, TextField, Toolbar, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { styledDatePicker, styledToolbar, styledTypography } from './style';

import { useCalendar } from '@/hooks/useCalendarAction';
import { CalendarState, RootState } from '@/stores';

const Navigation: FC = () => {
  const { handlePrevMonth, handleNextMonth, handleSetMonth } = useCalendar();
  const calendar = useSelector<RootState, CalendarState>(
    (state) => state.calendar,
  );
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
        <IconButton size="small" onClick={handlePrevMonth}>
          <ArrowBackIos />
        </IconButton>
        <IconButton size="small" onClick={handleNextMonth}>
          <ArrowForwardIos />
        </IconButton>
        {/* FIXME: カレンダーで別の月を選択すると画面がチラつく */}
        <DatePicker
          value={calendarDate}
          onChange={handleSetMonth}
          format="YYYY年 M月"
          views={['month', 'year']}
          slots={{
            textField: (textFieldProps) => (
              <TextField {...textFieldProps} style={styledDatePicker} />
            ),
          }}
        />
      </Toolbar>
    </>
  );
};

export default Navigation;
