import styled from "styled-components";

export const SaleSliderWrapper = styled.div`
  margin-top: ${({ theme }) => theme.space.space24};
  display: flex;
  overflow: hidden;

  .sale-slider {
    &__product {
      position: relative;
      height: 300px;
      width: 100%;
      flex-shrink: 0;

      @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
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
`;

export const SaleSliderDetails = styled.div`
  padding: ${({ theme }) => theme.space.space8} ${({ theme }) => theme.space.space12};
  position: absolute;
  right: 2rem;
  bottom: 2rem;
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

export const SaleSliderButtons = styled.div`
  padding: ${({ theme }) => theme.space.space4} ${({ theme }) => theme.space.space12};
  background: ${({ theme }) => theme.color.black};
  position: absolute;
  bottom: ${({ theme }) => theme.space.space4};
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  display: flex;
  gap: ${({ theme }) => theme.space.space8};
  align-items: center;
`;

export const SaleSliderButton = styled.button<{ active: boolean }>`
  width: 15px;
  height: 15px;
  background: ${({ theme, active }) => (active ? theme.color.black : theme.color.white)};
  border: ${({ theme }) => theme.color.white} 2px solid;
  border-radius: 50%;
  cursor: pointer;
`;
