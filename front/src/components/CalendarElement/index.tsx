import { FC } from 'react';

import { ImageListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { styledDate, styledElement, styledToday } from './styles';

import { RootState } from '@/stores';
import { isCurrentMonth, isFirstDay, isToday } from '@/utils/calendar';

type Props = {
  day: dayjs.Dayjs;
};

const CalendarElement: FC<Props> = ({ day }) => {
  const currentMonth = useSelector<RootState, number>(
    (state) => state.calendar.month,
  );

  const format = isFirstDay(day) ? 'M月D日' : 'D';
  const textColor = isCurrentMonth(day, currentMonth)
    ? 'textPrimary'
    : grey[400];

  return (
    <ImageListItem style={styledElement}>
      <Typography
        style={styledDate}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span style={isToday(day) ? styledToday : {}}>
          {day.format(format)}
        </span>
      </Typography>
    </ImageListItem>
  );
};

export default CalendarElement;
