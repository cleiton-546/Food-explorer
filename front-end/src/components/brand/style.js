import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > div {
    display: flex;
    gap: 1rem;
    white-space: nowrap;
    align-items: center;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2rem;
    }

    svg {
      margin-bottom: 15px;
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 0.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: initial;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    div {
      gap: 0.5rem;
      h1 {
        font-size: 1.5rem;
      }

     svg {
       margin-bottom: 8px;
     }
    }

   
  }
`;

