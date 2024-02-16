import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  height: 100%;

  justify-content: space-between;

  .brand {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 30px;
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
      margin-right: 3.9rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 2rem;
   
  }
`;

export const Form = styled.form`
  margin: 35px 90px 35px -90px;
  border-radius: 16px;
  width: 50%;
  padding: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  .Input {
    width: 100%;
  }

  .Input input {
    display: flex;
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    margin-top: 5px;
  }

  > div {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 32px;
      font-weight: 500;
    }

    a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 500;
      font-size: 14px;
      border: none;
      text-decoration: none;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    margin: 0;
    margin-top: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-top: 0.5rem;
  }
`;

