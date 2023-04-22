import Header from '@/components/common/header';
import styled from '@emotion/styled';

const Home = () => {
  return (
    <_Wrapper>
      <Header />
    </_Wrapper>
  );
};

export default Home;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
