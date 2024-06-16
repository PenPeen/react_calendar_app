import { FC } from 'react';

import { ImageList, ImageListItem } from '@mui/material';

import { CalendarContainer, elementStyle, gridStyle } from './styles';

import { calendar } from '@/data';

const CalendarBoard: FC = () => {
  return (
    <CalendarContainer>
      <ImageList style={gridStyle} cols={7} gap={0}>
        {calendar.map((c, index) => (
          <ImageListItem key={index} style={elementStyle}>
            <span>{c}</span>
          </ImageListItem>
        ))}
      </ImageList>
    </CalendarContainer>
  );
};

export default CalendarBoard;
