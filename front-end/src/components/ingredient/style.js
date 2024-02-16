import styled from "styled-components";

export const Container = styled.span`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 0.31rem;
  margin-right: 0.75rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
