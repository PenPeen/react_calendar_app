import styled from 'styled-components';

export const styledElement: React.CSSProperties = {
  borderRight: '1px solid #ccc',
  borderBottom: '1px solid #ccc',
  height: '18vh',
};

export const styledDate: React.CSSProperties = {
  padding: '5px 0',
  height: '24px',
};

export const styledToday: React.CSSProperties = {
  display: 'inline-block',
  lineHeight: '24px',
  width: '24px',
  backgroundColor: '#1a73e8',
  color: '#fff',
  borderRadius: '50%',
};

export const StyledScheduleContainer = styled.div`
  overflow: scroll;
  height: calc(18vh - 40px);
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
