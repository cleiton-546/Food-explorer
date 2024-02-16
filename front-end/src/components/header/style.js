import styled from "styled-components";
import { Link } from 'react-router-dom'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";



export const Container = styled.header`
  height: 0px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.18rem 5rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  .brand {
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .brand svg {
    margin-top: 0.25rem;
    width: 1.87rem;
    height: 1.87rem;
  }

  .input {
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    align-items: center;
    border-radius: 5px;
    padding: 0 0 0 7rem;
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
    width: 35%;
  }

  .button button {
    padding: 0.75rem 2rem;
  }

  .buttonRequest {
    width: 21.875rem;

    .receipt {
      display: none;
    }
  }

  .buttonRequest button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.31rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2rem 4rem;

    .brand {
      font-size: 0.1rem;
    }

    .input {
      padding: 0 0 0 1rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      height: 7.125rem;
      padding: 2.18rem 2rem;
      justify-content: space-between;

    .brand {
      margin: 0 auto;
    }

    .input {
      display: none;
    }

    .buttonRequest button {
      display: none;
    }

    .buttonRequest {
      width: 2rem;

      .receipt {
        flex: 1;
        width: 10px;
        display: block;
        position: relative;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      .receipt svg {
        font-size: 2.2rem;
        display: block;
      }

      .receipt span {
        display: flex;
        font-size: 1.2rem;
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 1rem;
        position: absolute;
        top: 0;
        margin-left: 26px;
        align-items: center;
        justify-content: center;
      }
    }
  }
`; 

export const NewDish = styled(Link)`
width: 35%;
border-radius: 0.5rem;

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  display: none;
}
`

export const Logout = styled.button`
display: block;
border: none;
background-color: transparent;

svg {
    cursor: pointer;
    width: 1.9rem;
    height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
}
 
 @media (max-width: ${DEVICE_BREAKPOINTS.MD})	{
  display: none;
 }
`;

export const Menu = styled.button`

  background: none;
  border: none;
  display: none;

  > svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    align-self: flex-start;
  }
`;