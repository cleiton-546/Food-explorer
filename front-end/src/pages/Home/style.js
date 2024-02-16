import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  .main {
    padding: 9.375rem 7.5rem;
  }

  .gradient {
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    height: 100%;
    width: 100%;

    .meals {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2rem;
      font-weight: 500;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide div {
    object-fit: cover;
  }

  .swiper-button-prev {
    justify-content: start;
    width: 10%;
    height: 100%;
    background: linear-gradient(
      98deg,
      #000a0f 0%,
      rgba(0, 10, 15, 0.272541) 100%
    );

    left: 0px;
    top: 1.375rem;
  }

  .swiper-button-next {
    width: 10%;
    height: 100%;
    background: linear-gradient(
      98deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    right: 0;
    top: 1.375rem;
    padding-right: 0.5rem;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .mySwiper {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .main {
      padding: 2rem 2rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .main {
      
    }

    .gradient {
    

      .meals {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  height: 17.2rem;

  .container {
    display: flex;
    width: 100%;
    display: flex;
    align-items: center;

    .desktop {
      max-width: 100%;
      height: 25rem;
      position: relative;
      top: -4rem;
      left: -4rem;
    }

    .mobile {
      display: none;
    }

    .description {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .description h2 {
      font-size: 2.5rem;
      font-weight: 500;
    }

    .description p {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 2rem;
    height: 8rem;

    .images {
      .desktop {
        display: none;
      }

      .mobile {
        margin-bottom: 2.5rem;
        margin-left: -1.5rem;
        display: block;
      }
    }

    .container {
      .description {
        font-size: 1px;
        display: block;
        flex-wrap: nowrap;
      }

      .description h2 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 8rem;

    .container {
      .description {
        display: block;
        flex-wrap: nowrap;
      }

      .description h2 {
        font-size: 1rem;
        margin-bottom: 4px;
      }

      .description p {
        font-size: 0.5rem;
      }
    }
  }
`;

  
