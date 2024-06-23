import { FC } from 'react';

import { StyleProps, StyledSchedule } from './styles';

import { useCurrentSchedule } from '@/hooks/useCurrentSchedule';
import { ScheduleItem } from '@/types';

type Props = {
  schedule: ScheduleItem;
  custom?: StyleProps;
};

const Schedule: FC<Props> = ({ schedule, custom }) => {
  const handleScheduleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    handleSetCurrent(schedule);
    handleOpenDialog();
  };

  const { handleSetCurrent, handleOpenDialog } = useCurrentSchedule();

  return (
    <StyledSchedule {...custom} onClick={(e) => handleScheduleClick(e)}>
      {schedule.title}
    </StyledSchedule>
  );
};

export default Schedule;
