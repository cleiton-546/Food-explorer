import styled from "styled-components";

export const Container = styled.div`
  > h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  > textarea {
    width: 100%;
    height: 172px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    border: none;
    outline: none;
    resize: none;
    font-size: 16px;
    font-weight: 400;
    

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
