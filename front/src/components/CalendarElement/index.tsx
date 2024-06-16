import { FC } from 'react';

import { ImageListItem, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { dateStyle, elementStyle, todayStyle } from './styles';

import { isCurrentMonth, isFirstDay, isToday } from '@/utils/calendar';

type Props = {
  day: dayjs.Dayjs;
};

const CalendarElement: FC<Props> = ({ day }) => {
  const format = isFirstDay(day) ? 'M月D日' : 'D';
  const textColor = isCurrentMonth(day) ? 'textPrimary' : 'textSecondary';

  return (
    <ImageListItem style={elementStyle}>
      <Typography
        style={dateStyle}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span style={isToday(day) ? todayStyle : {}}>{day.format(format)}</span>
      </Typography>
    </ImageListItem>
  );
};

export default CalendarElement;
