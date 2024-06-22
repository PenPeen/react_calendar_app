import { DatePicker } from '@mui/x-date-pickers';
import styled from 'styled-components';

export const styledToolbar = {
  padding: '0',
};

export const styledTypography = {
  margin: '0 30px 0 10px',
};

export const StyledDatePicker = styled(DatePicker)`
  width: 175px;
  margin-left: 30px !important;
  border: none;

  & fieldset {
    border: none;
    border-bottom: solid 1px;
    border-radius: 0;
  }
`;

export const styledAppImage = {
  marginLeft: 'auto',
};
