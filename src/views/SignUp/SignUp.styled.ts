import styled from "styled-components";
import { Form } from "formik";

export const SignUpWrapper = styled.div`
  margin-top: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sign-up__header {
    font-size: ${({ theme }) => theme.fontSize.font24};
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;

  .sign-up {
    &__label {
      margin-top: ${({ theme }) => theme.space.space16};
      display: flex;
      flex-direction: column;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }

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

    &__error {
      margin-top: ${({ theme }) => theme.space.space2};
      color: ${({ theme }) => theme.color.red};
      font-size: ${({ theme }) => theme.fontSize.font14};
    }

    &__button {
      margin-top: ${({ theme }) => theme.space.space16};
      font-size: ${({ theme }) => theme.fontSize.font18};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      cursor: pointer;

      &:disabled {
        color: ${({ theme }) => theme.color.gray};
      }
    }
  }
`;
