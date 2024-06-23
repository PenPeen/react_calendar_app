import { FC } from 'react';

import { ImageList, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { styledContainer, styledGrid, styledDays } from './styles';
import CalendarElement from '../CalendarElement';

import { useScheduleForm } from '@/hooks/useScheduleForm';
import { RootState, CalendarState } from '@/stores';
import { days } from '@/types';
import { ScheduleItem } from '@/types/schedule';
import { createCalendar, mapSchedulesToDate } from '@/utils/calendar';

const CalendarBoard: FC = () => {
  const { handleOpenDialog } = useScheduleForm();

  const currentCalendar = useSelector<RootState, CalendarState>(
    (state) => state.calendar,
  );
  const schedules = useSelector<RootState, ScheduleItem[]>(
    (state) => state.schedules.items,
  );

  const calendar = mapSchedulesToDate(
    createCalendar(35, currentCalendar),
    schedules,
  );

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
        {calendar.map(({ date, schedules }) => (
          <div
            key={date.toISOString()}
            onClick={() => handleOpenDialog(date.toISOString())}
          >
            <CalendarElement day={date} schedules={schedules} />
          </div>
        ))}
      </ImageList>
    </div>
  );
};

export default CalendarBoard;
