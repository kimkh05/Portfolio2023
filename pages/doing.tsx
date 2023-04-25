import Frame from '@/components/frame';
import styled from '@emotion/styled';
import { DSMActivity } from '@/utils/constants/activity';
import { DSMActivityType } from '@/types/activity';
import { OtherContest } from '@/utils/constants/contest';
import SchoolItem from '@/components/activity/SchoolItem';
import { ContestType } from '@/types/contest';
import ContestItem from '@/components/contest/Item';

const DoingPage = () => {
  return (
    <Frame status="참여활동">
      <_Title>대덕소프트웨어마이스터고등학교</_Title>
      <_Wrapper>
        {DSMActivity.map((element: DSMActivityType) => (
          <SchoolItem key={element.id} {...element} />
        ))}
      </_Wrapper>
      <_Title>참여한 외부활동</_Title>
      {OtherContest.map((element: ContestType) => (
        <ContestItem key={element.id} {...element} />
      ))}
    </Frame>
  );
};

export default DoingPage;

const _Title = styled.span`
  ${({ theme }) => theme.font.title2};
`;

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 50px 0;
`;
