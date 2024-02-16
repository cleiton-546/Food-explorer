import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 250px;
  }

  header {
    display: flex;
    height: 114px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    color: white;
  }

  header button {
    display: flex;
    margin-top: 15px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
    border: none;
    font-size: 20px;
    align-items: center;
    gap: 10px;
  }

  main {
    width: calc(100% - 250px);
    margin-left: 250px;
    height: 100%;
    overflow-y: auto;
    padding: 30px;

    .input {
      display: flex;

      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      align-items: center;
      border-radius: 5px;
      padding: 0 0 0 1rem;
    }

    .input div {
      width: 100%;
      display: flex;
      border: none;
    }

    .input input {
      background: transparent;
    }

    .input svg {
      display: flex;
      position: relative;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button {
      display: flex;
      flex-direction: column;
      margin-top: 25px;
      gap: 5px;
    }

    .button button {
      display: flex;
      align-items: start;
      padding: 5px 0 5px 5px;
      font-size: 1.5rem;
      font-weight: 300;
      border: none;
      background: none;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin-left: 0;
      width: 100%;
    }
  }
`;


export const NewDish = styled(Link)`
  display: flex;
  align-items: start;
  padding: 5px 0 5px 5px;
  font-size: 1.5rem;
  font-weight: 300;
  border: none;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-decoration: none;
`;
