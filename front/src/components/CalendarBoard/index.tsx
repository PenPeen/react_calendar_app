import { FC } from 'react';

import { ImageList, Typography } from '@mui/material';

import { styledContainer, styledGrid, styledDays } from './styles';
import CalendarElement from '../CalendarElement';

import { useCurrentCalendarState } from '@/hooks/useCurrentCalendarState';
import { useFetchScheduleAction } from '@/hooks/useFetchScheduleAction';
import { useScheduleFormAction } from '@/hooks/useScheduleFormAction';
import { useSchedulesState } from '@/hooks/useSchedulesState';
import { days } from '@/types';
import { createCalendar } from '@/utils/calendar';
import { mapSchedulesToDate } from '@/utils/schedule';

const CalendarBoard: FC = () => {
  const { handleOpenDialog } = useScheduleFormAction();
  const schedules = useSchedulesState();
  const currentCalendar = useCurrentCalendarState();
  useFetchScheduleAction(currentCalendar);

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
