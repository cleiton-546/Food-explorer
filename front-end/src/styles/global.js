import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-Sizing: border-box;
  }

  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 15px;
      
    }

       
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 14px;
      
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      font-size: 12px;

    }

  }    

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-family: 'Roboto', sans-serif;
  }

  body, input, button, textarea, main,  h2, span{
    font-size: 1rem;
  }

  h3, p, input, textarea, &placeholder {
    font-family: 'Roboto', sans-serif;
  }
  
  h4, h2, button, a {
    font-family: 'Poppins', sans-serif;
  } 

  
    svg:hover, button:hover, a:hover {
        filter: brightness(0.9);
    }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

 button {
  cursor: pointer;
 }



  
`;