import { DatePicker } from '@mui/x-date-pickers';
import styled from 'styled-components';

export const styledTextField: React.CSSProperties = {
  margin: '4px 0',
};

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

export const StyledValidationMessage = styled.div`
  border-top: solid 1px;
  height: 32px;
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  color: #d32f2f;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 22px;
  border: none;

  &:focus-visible {
    outline: none;
  }
`;
