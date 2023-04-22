import styled from '@emotion/styled';
import { UpperType, StatusType, UpperListType } from '@/types/upper';
import Link from 'next/link';

const UpperList = ({ status, list }: UpperType) => {
  return (
    <_Wrapper>
      {list.map((element: UpperListType) => (
        <_Text href={element.link} status={status} value={element.title} key={element.id}>
          {element.title}
        </_Text>
      ))}
    </_Wrapper>
  );
};

export default UpperList;

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.875rem;
`;

const _Text = styled(Link)<{ status: StatusType; value: string }>`
  color: ${({ theme, status, value }) => (status === value ? theme.color.black : theme.color.gray500)};
  ${({ theme }) => theme.font.title1};
  cursor: pointer;
  text-decoration: none;
  margin-right: 3.125rem;
`;
