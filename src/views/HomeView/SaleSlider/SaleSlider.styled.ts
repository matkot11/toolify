import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const SaleSliderWrapper = styled(Carousel)`
  margin-top: ${({ theme }) => theme.space.space24};

  .sale-slider {
    &__product {
      position: relative;
      display: block;
      height: 300px;
      text-align: initial;
      cursor: pointer;

      @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        height: 500px;
        border-radius: 5px;
      }
    }

    &__image {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;

      @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        border-radius: 5px;
      }
    }
  }

  // Overwrite default react-responsive-carousel library styles
  .carousel-slider {
    display: flex;
    justify-content: center;
  }

  .control-dots {
    padding: ${({ theme }) => theme.space.space8} ${({ theme }) => theme.space.space12};
    margin-bottom: ${({ theme }) => theme.space.space4};
    width: max-content;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.space8};
    background: ${({ theme }) => theme.color.black};
    text-align: center;
    border-radius: 5px;

    .dot {
      margin: 0;
      width: 12px;
      height: 12px;
    }
  }
`;

export const SaleSliderDetails = styled.div`
  padding: ${({ theme }) => theme.space.space8} ${({ theme }) => theme.space.space12};
  position: absolute;
  right: 2rem;
  bottom: 3rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.space8};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.font20};
  }

  .sale-slider {
    &__price {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }

    &__sale-price {
      align-self: end;
      font-size: ${({ theme }) => theme.fontSize.font14};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      text-decoration: line-through;

      @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        font-size: ${({ theme }) => theme.fontSize.font16};
      }
    }
  }
`;
