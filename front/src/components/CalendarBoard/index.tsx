import { FC } from 'react';

import { ImageList } from '@mui/material';

import 'dayjs/locale/ja';
import { CalendarContainer, gridStyle } from './styles';
import CalendarElement from '../CalendarElement';

import { createCalendar } from '@/utils/calendar';

const calendar = createCalendar();

const CalendarBoard: FC = () => {
  return (
    <CalendarContainer>
      <ImageList style={gridStyle} cols={7} gap={0}>
        {calendar.map((c) => (
          <CalendarElement key={c.toISOString()}>
            {c.format('D')}
          </CalendarElement>
        ))}
      </ImageList>
    </CalendarContainer>
  );
};

export default CalendarBoard;
