import styled from "styled-components";
export const NavbarMenu = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.color.white};
  height: calc(100vh - 45px);
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  z-index: 10;
  align-items: center;
  justify-content: center;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: initial;
    display: flex;
    height: auto;
  }

  .navbar {
    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.space.space20};

      @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: row;
      }
    }

    &__item {
      font-size: ${({ theme }) => theme.fontSize.font20};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      cursor: pointer;

      &-category {
        padding: 0 ${({ theme }) => theme.space.space12};
        width: 100%;
        display: block;
      }

      &-categories {
        position: relative;
      }

      &-category.active {
        color: ${({ theme }) => theme.color.blue};
      }

      &.active {
        color: ${({ theme }) => theme.color.blue};
      }
    }
  }
`;

export const NavbarCategories = styled.ul`
  background-color: ${({ theme }) => theme.color.white};
  margin-top: ${({ theme }) => theme.space.space8};
  padding: ${({ theme }) => theme.space.space12} 0;
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  gap: ${({ theme }) => theme.space.space4};
  font-size: ${({ theme }) => theme.fontSize.font16};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: ${({ theme }) => theme.color.black} 1px solid;
  border-radius: 5px;
`;
