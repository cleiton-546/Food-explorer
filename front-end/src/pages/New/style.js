import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  > main {
    padding: 40px 123px 193px;
    font-size: 1rem;
    font-weight: 400;

    .add {
      font-size: 32px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-top: 24px;
      margin-bottom: 32px;
    }
    .name {
      display: flex;
      gap: 32px;
      .left {
        width: 100%;
      }
    }
    .name h3 {
      margin-bottom: 16px;
    }

    .inputImg {
      width: 50%;
      height: 48px;

      > h3 {
        margin-bottom: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 16px;
        font-weight: 400;
      }

      > input {
        display: none;
      }

      > label {
        height: 100%;
        width: 100%;
        padding: 12px 32px;
        display: flex;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        gap: 10px;

        > span {
          font-size: 14px;
        }
      }
    }

    .section {
      display: flex;
      width: auto;
      justify-content: space-between;
      margin-top: 32px;
      margin-bottom: 32px;
      gap: 32px;
    }

    .ingredient {
      display: flex;
      flex-wrap: wrap;
      padding: 4px 0.5rem;
      gap: 1rem;
      width: 100%;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 8px;
    }

    .value {
      width: 25%;
    }

    .button {
      display: flex;
      justify-content: flex-end;
      margin-top: 28px;
    }

    .button button {
      width: 172px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    main {
      display: flex;
      flex-direction: column;

      .name {
        display: flex;
        flex-direction: column;
      }

      .inputImg {
        width: 100%;
        margin-bottom: 10px;
      }

      .left {
        width: 100%;
      }

      .section {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .ingredients {
        height: 100%;
        flex-wrap: nowrap;
      }

      .value {
        width: 100%;
      }
    }
  }
`;

