import { FC } from 'react';

import { StyleProps, StyledSchedule } from './styles';

import { useCurrentScheduleAction } from '@/hooks/useCurrentScheduleAction';
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

  const { handleSetCurrent, handleOpenDialog } = useCurrentScheduleAction();

  return (
    <StyledSchedule {...custom} onClick={(e) => handleScheduleClick(e)}>
      {schedule.title}
    </StyledSchedule>
  );
};

export default Schedule;
