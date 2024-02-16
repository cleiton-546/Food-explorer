import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .brand {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 1.875rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 700;
  }

  .brand svg {
    margin-top: 10px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;

    .brand {
      margin-right: 3.90rem;
      
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1rem;
   
  }
`;

export const Form = styled.form`
  margin: 3.125rem 5.625rem 3.125rem 0;
  border-radius: 1rem;
  width: 56%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > div {
    display: flex;
    padding: 4rem;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      margin-bottom: 32px;
      font-size: 2rem;
      font-weight: 500;
    }

    a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 500;
      font-size: 0.875rem;
      margin-top: 32px;
      border: none;
      text-decoration: none;
    }
  }

  .input {
    width: 100%;
  }

  .input input {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 32px;
  }

  .input h3 {
    margin-bottom: 8px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    margin: 0;
    margin-top: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    div {
      padding: 0.5rem;
    }
  }
`; 




