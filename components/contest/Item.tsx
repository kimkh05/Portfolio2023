import styled from '@emotion/styled';
import { ContestType } from '@/types/contest';
import Image from 'next/image';

const ContestItem = (props: ContestType) => {
  const { title, imageUrl, period, topic, numberOfPeople, field, introduce, award }: ContestType = props;

  return (
    <_Wrapper>
      <Image src={imageUrl} alt={title} />
      <_SideInformationWrapper>
        <_UpperWrapper>
          <_ContestTitle>{title}</_ContestTitle>
          <_PeriodText>{period}</_PeriodText>
        </_UpperWrapper>
        <_InformationWrapper>
          <_InformationItem>
            <_Title>주제</_Title>
            <_Inner>{topic}</_Inner>
          </_InformationItem>
          <_InformationItem>
            <_Title>참여 인원 수</_Title>
            <_Inner>{numberOfPeople}명</_Inner>
          </_InformationItem>
          <_InformationItem>
            <_Title>참여 분야</_Title>
            <_Inner>{field.join(', ')}</_Inner>
          </_InformationItem>
          <_InformationItem>
            <_Title>프로젝트 소개</_Title>
            <_Inner>{introduce}</_Inner>
          </_InformationItem>
          {award && (
            <_InformationItem>
              <_Title>수상</_Title>
              <_Inner>{award}</_Inner>
            </_InformationItem>
          )}
        </_InformationWrapper>
      </_SideInformationWrapper>
    </_Wrapper>
  );
};

export default ContestItem;

const _Wrapper = styled.article`
  width: 100%;
  display: flex;
  margin-top: 50px;
`;

const _SideInformationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 50px;
`;

const _ContestTitle = styled.span`
  ${({ theme }) => theme.font.title2};
`;

const _PeriodText = styled.span`
  ${({ theme }) => theme.font.body5};
`;

const _UpperWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.body3};
  margin-right: 30px;
  width: 130px;
`;

const _InformationWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  word-break: keep-all;
`;

const _InformationItem = styled.div`
  width: 100%;
  display: flex;
`;

const _Inner = styled.span`
  width: 300px;
  ${({ theme }) => theme.font.body4};
`;
