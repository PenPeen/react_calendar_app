import { FC } from 'react';

import { ImageList, Typography } from '@mui/material';

import 'dayjs/locale/ja';
import { CalendarContainer, gridStyle } from './styles';
import { days as styleDays } from './styles';
import CalendarElement from '../CalendarElement';
import { days } from '../types';

import { createCalendar } from '@/utils/calendar';

const calendar = createCalendar(35);

const CalendarBoard: FC = () => {
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
