import Background from '@/components/common/background';
import Header from '@/components/common/header';
import styled from '@emotion/styled';
import UpperList from '@/components/upper';
import { ReactNode } from 'react';
import { StatusType } from '@/types/upper';
import { PageList } from '@/utils/constants/pagelist';

interface PropsType {
  children: ReactNode;
  status: StatusType;
}

const Frame = ({ children, status }: PropsType) => {
  return (
    <_Wrapper>
      <Header />
      <_Nav>
        <UpperList status={status} list={PageList} />
        <Background>{children}</Background>
      </_Nav>
    </_Wrapper>
  );
};

export default Frame;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const _Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 80px 90px;
`;
