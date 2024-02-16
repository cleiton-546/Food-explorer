import { styled } from "styled-components";


export const Container = styled.section`
   width: 100%;
  
    
  > h3 {
    margin-bottom: 16px ;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 16px;
    font-weight: 400;
  }
`;