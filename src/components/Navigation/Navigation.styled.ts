import styled from "styled-components";

export const NavigationWrapper = styled.div`
  padding: ${({ theme }) => theme.space.space8};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
