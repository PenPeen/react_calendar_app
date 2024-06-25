import { FC } from 'react';

import { StyleProps, StyledSchedule } from './styles';

import { useCurrentScheduleAction } from '@/hooks/useCurrentScheduleAction';
import { ScheduleItem } from '@/types';

type Props = {
  schedule: ScheduleItem;
  custom?: StyleProps;
};

const Schedule: FC<Props> = ({ schedule, custom }) => {
  const dispatchScheduleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatchSetCurrent(schedule);
    dispatchOpenDialog();
  };

  const { dispatchSetCurrent, dispatchOpenDialog } = useCurrentScheduleAction();

  return (
    <StyledSchedule {...custom} onClick={(e) => dispatchScheduleClick(e)}>
      {schedule.title}
    </StyledSchedule>
  );
};

export default Schedule;
