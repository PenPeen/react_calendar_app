import { DatePicker } from '@mui/x-date-pickers';
import styled from 'styled-components';

export const styledTextField = {
  margin: '4px 0',
};

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 32px;
  font-size: 22px;
  border: none;

  &:focus-visible {
    outline: none;
  }
`;
