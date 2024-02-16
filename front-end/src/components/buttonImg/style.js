import styled  from "styled-components"

export const Container = styled.div`
  width: 50%;
  height: 48px;

  > h3 {
    margin-bottom: 2px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 16px;
    font-weight: 400;
  }

  >input {
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

  
  
`;   