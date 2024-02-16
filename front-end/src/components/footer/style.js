 import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

 export const Container = styled.div`
   display: flex;

   left: 0;
   bottom: 0;

   width: 100%;
   height: 60px;
   padding: 1.5rem 6.25rem;
   background-color: ${({ theme }) => theme.COLORS.DARK_600};
   bottom: 0;

   > footer {
     display: flex;
     align-items: center;
     justify-content: space-between;
     width: 100%;
     padding: 0.625rem;

     div {
       display: flex;
       font-weight: 700;
       gap: 5px;
       align-items: center;
       white-space: nowrap;
       color: ${({ theme }) => theme.COLORS.LIGHT_700};

       > p {
         font-size: 1.5rem;
       }
     }
     > p {
       color: ${({ theme }) => theme.COLORS.LIGHT_200};
       font-size: 0.875rem;
       font-weight: 400;
     }
   }

   @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
     padding: 0.9rem;

     > footer {
       > p {
         font-size: 0.7rem;
       }
     }
   }

   @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0.1rem;

    > footer {
      div {
        > p {
          font-size: 1rem;
        }
      }
      > p {
        font-size: 0.5rem;
      }
    }
   }
 `;