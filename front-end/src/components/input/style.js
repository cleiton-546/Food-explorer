import styled from "styled-components";


export const Container = styled.div`
  align-items: center;
  width: 100%;
  border: none;

  > h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    font-weight: 400;
  }

  > input {
    box-sizing: border-box;
    font-weight: 400;
    height: 48px;
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
  }

  > svg {
    margin-left: 1rem;
  }
`;