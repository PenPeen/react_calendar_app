import { FC } from 'react';

import { ImageListItem, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { styledDate, styledElement, styledToday } from './styles';

import { isCurrentMonth, isFirstDay, isToday } from '@/utils/calendar';

type Props = {
  day: dayjs.Dayjs;
};

const CalendarElement: FC<Props> = ({ day }) => {
  const format = isFirstDay(day) ? 'M月D日' : 'D';
  const textColor = isCurrentMonth(day) ? 'textPrimary' : 'textSecondary';

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
