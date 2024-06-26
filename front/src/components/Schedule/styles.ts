import styled from 'styled-components';

export type StyleProps = {
  color?: string;
  width?: string;
  backgroundColor?: string;
  fontSize?: string;
  $padding?: string;
  $margin?: string;
  $borderRadius?: string;
};

export const StyledSchedule = styled.div<StyleProps>`
  width: ${(props) => props.width || '100%'};
  background-color: ${(props) =>
    props.backgroundColor || 'rgb(121, 134, 203);'};
  color: ${(props) => props.color || '#fff'};
  border-radius: ${(props) => props.$borderRadius || '0'};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: ${(props) => props.$padding || '0'};
  margin: ${(props) => props.$margin || '0'};
  cursor: pointer;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
`;
