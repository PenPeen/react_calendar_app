import { ScheduleState } from '@/stores/scheduleForm';
import { emoji } from '@/types/emoji';

export const isFormInvalid = (scheduleForm: ScheduleState): boolean => {
  return isTitleInvalid(scheduleForm) || isFormContainsEmoji(scheduleForm);
};

export const isTitleInvalid = (scheduleForm: ScheduleState): boolean => {
  return !scheduleForm.form.title && scheduleForm.isEditing;
};

export const isFormContainsEmoji = (scheduleForm: ScheduleState): boolean => {
  return (
    isContainsEmoji(scheduleForm.form.title) ||
    isContainsEmoji(scheduleForm.form.date) ||
    isContainsEmoji(scheduleForm.form.location) ||
    isContainsEmoji(scheduleForm.form.description)
  );
};

export const isContainsEmoji = (str: string): boolean => {
  return Boolean(str.match(emoji));
};
