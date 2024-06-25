import { FC } from 'react';

import {
  AccessTime,
  Close,
  LocationOnOutlined,
  NotesOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import dayjs from 'dayjs';

import {
  StyledDatePicker,
  StyledInput,
  StyledValidationMessage,
  styledTextField,
} from './styles';
import { isTitleInvalid } from './validate';

import { useScheduleFormAction } from '@/hooks/useScheduleFormAction';
import { useScheduleFormState } from '@/hooks/useScheduleFormState';

const AddScheduleDialog: FC = () => {
  const scheduleForm = useScheduleFormState();

  const { handleCloseDialog, handleSetValue, handleStoreForm, handleEditing } =
    useScheduleFormAction();

  return (
    <Dialog
      open={scheduleForm.isDialogOpen}
      onClose={handleCloseDialog}
      maxWidth="xs"
      fullWidth
    >
      <DialogActions>
        <Tooltip title="閉じる" placement="bottom">
          <IconButton onClick={handleCloseDialog} size="small">
            <Close />
          </IconButton>
        </Tooltip>
      </DialogActions>
      <DialogContent>
        <Box sx={{ mb: '32px' }}>
          <StyledInput
            value={scheduleForm.form.title}
            onChange={(e) => {
              handleEditing();
              handleSetValue('title', e.target.value);
            }}
            placeholder="タイトルを追加"
            autoFocus
            // onBlur={handleEditing}
          />
          <div>
            {isTitleInvalid(scheduleForm) && (
              <StyledValidationMessage>
                タイトルは必須です。
              </StyledValidationMessage>
            )}
          </div>
        </Box>
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
        <Button
          color="primary"
          variant="outlined"
          onClick={() => handleStoreForm(scheduleForm.form)}
          disabled={isTitleInvalid(scheduleForm)}
        >
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
