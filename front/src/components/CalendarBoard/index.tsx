import { FC } from 'react';

import { ImageList, ImageListItem } from '@mui/material';
import dayjs from 'dayjs';

import 'dayjs/locale/ja';
import { CalendarContainer, elementStyle, gridStyle } from './styles';

dayjs.locale('ja');
const firstDay = dayjs().startOf('month');

const createCalendar = (): dayjs.Dayjs[] => {
  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDay.day();
      const day = firstDay.add(diffFromFirstDay, 'day');

      return day;
    });
};

const calendar = createCalendar();

const CalendarBoard: FC = () => {
  return (
    <CalendarContainer>
      <ImageList style={gridStyle} cols={7} gap={0}>
        {calendar.map((c) => (
          <ImageListItem key={c.toISOString()} style={elementStyle}>
            <span>{c.format('D')}</span>
          </ImageListItem>
        ))}
      </ImageList>
    </CalendarContainer>
  );
};

export default CalendarBoard;
