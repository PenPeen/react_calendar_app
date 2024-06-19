import { FC } from 'react';

import { Dialog, DialogContent } from '@mui/material';
import { useSelector } from 'react-redux';

import { useScheduleForm } from '@/hooks/useScheduleForm';
import { RootState } from '@/stores';
import { ScheduleState } from '@/stores/scheduleForm';

const AddScheduleDialog: FC = () => {
  const scheduleForm = useSelector<RootState, ScheduleState>(
    (state) => state.scheduleForm,
  );

  const { handleCloseDialog } = useScheduleForm();

  return (
    <Dialog
      open={scheduleForm.isDialogOpen}
      onClose={handleCloseDialog}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>予定登録ダイアログ （tentative）</DialogContent>
    </Dialog>
  );
};

export default AddScheduleDialog;
