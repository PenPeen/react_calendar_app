import { FC } from 'react';

import { LocationOnOutlined, NotesOutlined } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { StyledInput, styledTextField } from './styles';

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
      <DialogContent>
        <StyledInput placeholder="タイトルと日時を追加" autoFocus />
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={styledTextField}
              fullWidth
              placeholder="場所を追加"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={styledTextField}
              fullWidth
              placeholder="説明を追加"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined">
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
