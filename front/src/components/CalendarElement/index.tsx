import { FC } from 'react';

import { ImageListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';

import {
  StyledScheduleContainer,
  styledDate,
  styledElement,
  styledToday,
} from './styles';
import Schedule from '../Schedule';

import { useCurrentCalendarState } from '@/hooks/useCurrentCalendarState';
import { ScheduleItem } from '@/types';
import { isCurrentMonth, isFirstDay, isToday } from '@/utils/calendar';

type Props = {
  day: dayjs.Dayjs;
  schedules: ScheduleItem[];
};

const CalendarElement: FC<Props> = ({ day, schedules }) => {
  const { month: currentMonth } = useCurrentCalendarState();

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
        <StyledScheduleContainer>
          {schedules.map((schedule) => {
            return (
              <Schedule
                key={schedule.id}
                schedule={schedule}
                custom={{
                  width: '85%',
                  $padding: '1px 8px',
                  $margin: '2px auto',
                  fontSize: '14px',
                  $borderRadius: '4px',
                }}
              />
            );
          })}
        </StyledScheduleContainer>
      </Typography>
    </ImageListItem>
  );
};

export default CalendarElement;
