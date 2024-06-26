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
import { isContainsEmoji, isFormInvalid, isTitleInvalid } from './validate';

import { useScheduleFormAction } from '@/hooks/useScheduleFormAction';
import { useScheduleFormState } from '@/hooks/useScheduleFormState';

const AddScheduleDialog: FC = () => {
  const scheduleForm = useScheduleFormState();

  const {
    dispatchCloseDialog,
    dispatchSetValue,
    dispatchStoreForm,
    dispatchEditing,
  } = useScheduleFormAction();

  return (
    <Dialog
      open={scheduleForm.isDialogOpen}
      onClose={dispatchCloseDialog}
      maxWidth="xs"
      fullWidth
    >
      <DialogActions>
        <Tooltip title="閉じる" placement="bottom">
          <IconButton onClick={dispatchCloseDialog} size="small">
            <Close />
          </IconButton>
        </Tooltip>
      </DialogActions>
      <DialogContent>
        <Box sx={{ mb: '32px' }}>
          <StyledInput
            value={scheduleForm.form.title}
            onChange={(e) => {
              dispatchEditing();
              dispatchSetValue('title', e.target.value);
            }}
            placeholder="タイトルを追加"
            autoFocus
            // onBlur={dispatchEditing}
          />
          <div>
            {isTitleInvalid(scheduleForm) && (
              <StyledValidationMessage>
                タイトルは必須です。
              </StyledValidationMessage>
            )}
          </div>
          <div>
            {isContainsEmoji(scheduleForm.form.title) && (
              <StyledValidationMessage>
                絵文字は使用できません。
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
                  dispatchSetValue('date', e.toISOString());
                }
              }}
            />
            <div>
              {isContainsEmoji(scheduleForm.form.date) && (
                <StyledValidationMessage>
                  絵文字は使用できません。
                </StyledValidationMessage>
              )}
            </div>
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
              onChange={(e) => dispatchSetValue('location', e.target.value)}
              style={styledTextField}
              fullWidth
              placeholder="場所を追加"
            />
            <div>
              {isContainsEmoji(scheduleForm.form.location) && (
                <StyledValidationMessage>
                  絵文字は使用できません。
                </StyledValidationMessage>
              )}
            </div>
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
              onChange={(e) => dispatchSetValue('description', e.target.value)}
              style={styledTextField}
              fullWidth
              placeholder="説明を追加"
            />
            <div>
              {isContainsEmoji(scheduleForm.form.description) && (
                <StyledValidationMessage>
                  絵文字は使用できません。
                </StyledValidationMessage>
              )}
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => dispatchStoreForm(scheduleForm.form)}
          disabled={isFormInvalid(scheduleForm)}
        >
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
