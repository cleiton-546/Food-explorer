import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 18.87rem;
  height: 28.875rem;
  z-index: 1;

  gap: 0.9375rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  .Icons {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .favorite.active {
    color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  .Img {
    display: flex;
  }

  .Img img {
    width: 11.875rem;
    height: 11.875rem;
  }

  .favorite {
    cursor: pointer;
  }

  .title {
    display: flex;
    text-align: center;
    white-space: nowrap;
  }

  .description {
    display: flex;
    text-align: center;
  }
  .edit {
    cursor: pointer;
  }

  .title {
    font-size: 1.5rem;
    align-items: center;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .price {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  .Add {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }

  .Add button {
    cursor: pointer;
    background: transparent;
    border: none;
    max-width: 1.9rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 1px;
  }

  .Add svg:hover {
    filter: brightness(0.5);
  }

  .add {
    display: flex;
    width: 100%;
    height: 2.8125rem;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .add button {
    width: 6.25rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 16.87rem;
    height: 25.875rem;
    padding: 2rem;

    .Img img {
      width: 7.875rem;
      height: 7.875rem;
    }

    .add {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .description {
      display: none;
    }

    .price {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .add button {
    }

    .button {
      margin-top: 0.5rem;
      width: 100%;
    }
    .button button {
      width: 100%;
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .title {
      font-size: 1rem;
    }
  }
`;
