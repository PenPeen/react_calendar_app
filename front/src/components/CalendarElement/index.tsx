import { FC, PropsWithChildren } from 'react';

import { ImageListItem } from '@mui/material';

import { elementStyle } from './styles';

const CalendarElement: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageListItem style={elementStyle}>
      <span>{children}</span>
    </ImageListItem>
  );
};

export default CalendarElement;
