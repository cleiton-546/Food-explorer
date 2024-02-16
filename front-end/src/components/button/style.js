import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 3.12rem;
  border: 0;
  padding: 0 1rem;

  white-space: nowrap;
  border-radius: 0.31rem;
  font-weight: 500;
  font-size: 0.9rem;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    font-size: 1.87rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 0.7rem;
  }
`;
