import styled from '@emotion/styled';
import { DSMActivityType } from '@/types/activity';
import Image from 'next/image';
import Link from 'next/link';

const SchoolItem = (props: DSMActivityType) => {
  const { title, date, imageUrl, link } = props;

  return (
    <_Wrapper>
      <_Image src={imageUrl} alt={title} />
      <_InnerWrapper href={link}>
        <_Title>{title}</_Title>
        <_Date>{date}</_Date>
      </_InnerWrapper>
    </_Wrapper>
  );
};

export default SchoolItem;

const _Wrapper = styled.div`
  min-width: 400px;
  display: flex;
`;

const _Image = styled(Image)`
  width: 100px;
  height: 100px;
`;

const _InnerWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title2};
`;

const _Date = styled.span`
  ${({ theme }) => theme.font.body5};
`;
