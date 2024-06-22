import { FC } from 'react';

import {
  AccessTime,
  LocationOnOutlined,
  NotesOutlined,
} from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from '@mui/material';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { StyledDatePicker, StyledInput, styledTextField } from './styles';

import { useScheduleForm } from '@/hooks/useScheduleForm';
import { RootState } from '@/stores';
import { ScheduleState } from '@/stores/scheduleForm';

const AddScheduleDialog: FC = () => {
  const scheduleForm = useSelector<RootState, ScheduleState>(
    (state) => state.scheduleForm,
  );

  const { handleCloseDialog, handleSetValue } = useScheduleForm();

  return (
    <Dialog
      open={scheduleForm.isDialogOpen}
      onClose={handleCloseDialog}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        <StyledInput
          value={scheduleForm.form.title}
          onChange={(e) => handleSetValue('title', e.target.value)}
          placeholder="タイトルと日時を追加"
          autoFocus
        />
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <StyledDatePicker
              format="YYYY年M月D日"
              value={dayjs(scheduleForm.form.date)}
              onChange={(e) => {
                if (e && e.isValid()) {
                  handleSetValue('date', e.toISOString());
                }
              }}
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
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              value={scheduleForm.form.location}
              onChange={(e) => handleSetValue('location', e.target.value)}
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
              value={scheduleForm.form.description}
              onChange={(e) => handleSetValue('description', e.target.value)}
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
