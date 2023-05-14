import styled from "styled-components";

export const HamburgerMenuWrapper = styled.button`
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;

  .hamburger-menu__line {
    width: 1.2rem;
    border: ${({ theme }) => theme.color.black} solid 1px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;
