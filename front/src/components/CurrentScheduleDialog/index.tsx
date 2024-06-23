import { FC } from 'react';

import {
  Close,
  DeleteOutlineOutlined,
  LocationOnOutlined,
  NotesOutlined,
} from '@mui/icons-material';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';

import {
  mainBlock,
  styledBox,
  styledCloseButton,
  subBlock,
  tbtlBlock,
} from './styles';

import { useCurrentScheduleAction } from '@/hooks/useCurrentScheduleAction';
import { useCurrentScheduleState } from '@/hooks/useCurrentScheduleState';

const CurrentScheduleDialog: FC = () => {
  const { handleCloseDialog, handleDeleteForm } = useCurrentScheduleAction();
  const currentSchedule = useCurrentScheduleState();

  return (
    <>
      <Dialog
        open={currentSchedule.isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
      >
        <DialogActions>
          <div style={styledCloseButton}>
            <IconButton
              onClick={() => handleDeleteForm(currentSchedule.current.id)}
              size="small"
            >
              <DeleteOutlineOutlined />
            </IconButton>
            <IconButton onClick={handleCloseDialog} size="small">
              <Close />
            </IconButton>
          </div>
        </DialogActions>

        <DialogContent>
          {currentSchedule.current && (
            <>
              <Grid
                style={mainBlock}
                container
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <span style={styledBox}></span>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" component="h2" style={tbtlBlock}>
                    {currentSchedule.current.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {dayjs(currentSchedule.current.date).format(
                      'M月 D日  HH:mm',
                    )}
                  </Typography>
                </Grid>
              </Grid>

              {currentSchedule.current.location && (
                <Grid
                  style={subBlock}
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <LocationOnOutlined />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>{currentSchedule.current.location}</Typography>
                  </Grid>
                </Grid>
              )}
              {currentSchedule.current.description && (
                <Grid
                  style={subBlock}
                  container
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <NotesOutlined />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography>
                      {currentSchedule.current.description}
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CurrentScheduleDialog;
