import styled from "styled-components";

export const MainTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SnackbarWrapper = styled.button<{ isVisible: boolean; color: "success" | "error" }>`
  padding: ${({ theme }) => theme.space.space16};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  background: ${({ theme, color }) => (color === "success" ? theme.color.green : theme.color.red)};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.font20};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border-radius: 10px;
  cursor: pointer;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  .main-template__close-icon {
    flex-shrink: 0;
    height: 25px;
    stroke-width: 1.9px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    left: 15%;
    right: 15%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    left: 30%;
    right: 30%;
  }
`;
