import styled from "styled-components";
;

export const Container = styled.div`
  display: flex ;
  padding: 0.625rem 0.5rem;
  align-items: center;


  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 0.5rem;

  > button {
    margin-right: 10px;
    width: 1px;
    cursor: pointer;
    border: none;
    background: none;
    
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    display: inline-block;
    outline: none;
    border: none;
    font-size: 0.8rem;
    max-width: 4.25rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  
`;
