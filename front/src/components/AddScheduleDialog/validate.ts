import { ScheduleState } from '@/stores/scheduleForm';

export const isTitleInvalid = (scheduleForm: ScheduleState): boolean => {
  return !scheduleForm.form.title && scheduleForm.isEditing;
};
