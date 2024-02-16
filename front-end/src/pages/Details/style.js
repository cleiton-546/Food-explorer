import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  > main {
    margin: 32px 120px 150px;

    .container {
      display: flex;
      margin-top: 42px;
      gap: 42px;

      > img {
        width: 24.375rem;
        height: 24.375rem;
        flex-shrink: 0;
      }
    }

    .content {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      h2 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-top: 2.8125rem;
        margin-bottom: 1.5rem;
      }

      h4 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 24px;
      }
    }

    .ingredients {
      margin-bottom: 52px;
      display: flex;
    }

    .button {
      justify-content: start;
      width: 131px;
    }

    .add {
      display: flex;
      width: 100%;
      height: 45px;
      gap: 25px;
      justify-content: center;
      align-items: center;
    }

    .Add {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .Add button {
      cursor: pointer;
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .includes svg {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > main {
      display: flex;
      flex-direction: column;
      margin: 0;
      width: 100%;
      padding: 2rem;
    

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        > img {
          max-width: 16.43rem;
          max-height: 16.43rem;
        }
      }

      .content h2 {
        width: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
      }
      .content h4 {
        display: flex;
        text-align: center;
      }
      
      .ingredients {
        display: flex;
        justify-content: center;
      }

      .button  {
        width: 100%;
        
      }

      .add {
        width: 100%;
      
      }
     
      .includes {
        display: flex;
        width: 50%;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
      }
  
     .includes svg {
      display: block;
      margin-right: 7px;
     }

    }
  }
`;






