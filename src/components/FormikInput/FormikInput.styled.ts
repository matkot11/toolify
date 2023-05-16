import styled from "styled-components";

export const FormikInputWrapper = styled.label`
  margin-top: ${({ theme }) => theme.space.space12};
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  .formik-input {
    &__input {
      margin-top: ${({ theme }) => theme.space.space4};
      padding: ${({ theme }) => theme.space.space8};
      width: 70vw;
      border: 1px solid ${({ theme }) => theme.color.black};
      border-radius: 5px;

      &:focus {
        outline: 1px solid ${({ theme }) => theme.color.blue};
        border: none;
      }

      @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 50vw;
      }

      @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        width: 30vw;
      }
    }
  }
`;

export const FormikInputError = styled.span<{ isVisible: boolean }>`
  margin-top: ${({ theme }) => theme.space.space2};
  height: 17px;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.font14};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
