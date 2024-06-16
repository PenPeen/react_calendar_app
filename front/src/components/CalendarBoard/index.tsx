import { FC } from 'react';

import { ImageList, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { CalendarContainer, gridStyle, days as styleDays } from './styles';
import CalendarElement from '../CalendarElement';
import { days } from '../types';

import { RootState, CalenderState } from '@/stores';
import { createCalendar } from '@/utils/calendar';

const CalendarBoard: FC = () => {
  const currentCalendar = useSelector<RootState, CalenderState>(
    (state) => state.calendar,
  );

  const calendar = createCalendar(35, currentCalendar);

  return (
    <CalendarContainer>
      <ImageList style={gridStyle} cols={7} gap={0}>
        {days.map((d, i) => (
          <li key={i}>
            <Typography
              style={styleDays}
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
    </CalendarContainer>
  );
};

export default CalendarBoard;
