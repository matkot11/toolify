import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo {
    &__icon {
      margin-right: ${({ theme }) => theme.space.space2};
    }

    &__text {
      font-size: ${({ theme }) => theme.fontSize.font24};
      font-family: ${({ theme }) => theme.fontFamily.arapey};
      letter-spacing: 3px;

      @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.font40};
      }

      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        font-size: ${({ theme }) => theme.fontSize.font50};
      }
    }
  }
`;
