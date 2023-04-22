import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

const Background = ({ children }: PropsType) => {
  return <_Wrapper>{children}</_Wrapper>;
};

export default Background;

const _Wrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 1.25rem;
  padding: 3.75rem;
  display: flex;
  flex-direction: column;
`;
