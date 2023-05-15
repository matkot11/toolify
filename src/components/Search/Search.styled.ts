import styled from "styled-components";

export const InputWrapper = styled.input`
  padding: ${({ theme }) => theme.space.space8} ${({ theme }) => theme.space.space16};
  margin-top: ${({ theme }) => theme.space.space16};
  align-self: center;
  width: 90%;
  font-size: ${({ theme }) => theme.fontSize.font18};
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.blue};
    border: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: ${({ theme }) => theme.space.space20};
    width: 60%;
    align-self: flex-start;
  }
`;
