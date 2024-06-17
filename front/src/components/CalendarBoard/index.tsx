import { FC } from 'react';

import { ImageList, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { styledContainer, styledGrid, styledDays } from './styles';
import CalendarElement from '../CalendarElement';
import { days } from '../types';

import { RootState, CalendarState } from '@/stores';
import { createCalendar } from '@/utils/calendar';

const CalendarBoard: FC = () => {
  const currentCalendar = useSelector<RootState, CalendarState>(
    (state) => state.calendar,
  );

  const calendar = createCalendar(35, currentCalendar);

  return (
    <div style={styledContainer}>
      <ImageList style={styledGrid} cols={7} gap={0}>
        {days.map((d, i) => (
          <li key={i}>
            <Typography
              style={styledDays}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map((day) => (
          <CalendarElement key={day.toISOString()} day={day} />
        ))}
      </ImageList>
    </div>
  );
};

export default CalendarBoard;
