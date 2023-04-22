import Frame from '@/components/frame';
import styled from '@emotion/styled';
import { DSMActivity } from '@/utils/constants/activity';
import { DSMActivityType } from '@/types/activity';
import SchoolItem from '@/components/activity/SchoolItem';

const Home = () => {
  return (
    <Frame status="참여활동">
      <_Title>대덕소프트웨어마이스터고등학교</_Title>
      <_Wrapper>
        {DSMActivity.map((element: DSMActivityType) => (
          <SchoolItem key={element.id} {...element} />
        ))}
      </_Wrapper>
    </Frame>
  );
};

export default Home;

const _Title = styled.span`
  ${({ theme }) => theme.font.title2};
  margin-bottom: 50px;
`;

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
