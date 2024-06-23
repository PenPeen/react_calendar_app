import { FC } from 'react';

import { StyleProps, StyledSchedule } from './styles';

import { ScheduleItem } from '@/types';

type Props = {
  schedule: ScheduleItem;
  custom?: StyleProps;
};

const Schedule: FC<Props> = ({ schedule, custom }) => {
  return <StyledSchedule {...custom}>{schedule.title}</StyledSchedule>;
};

export default Schedule;
