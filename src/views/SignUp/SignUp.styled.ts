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
