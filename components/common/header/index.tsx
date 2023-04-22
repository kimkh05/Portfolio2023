import styled from '@emotion/styled';
import { ProfileImage } from '@/assets';
import Image from 'next/image';
import { InformationList } from '@/utils/constants/information';
import { InformationListType } from '@/types/information';
import IconListItem from '@/components/iconItem/IconListItem';

const Header = () => {
  return (
    <_Wrapper>
      <_ProfileImage src={ProfileImage} alt="Profile Image" />
      <_InformationWrapper>
        <_Name>김경호</_Name>
        <_FieldText>Frontend Developer</_FieldText>
        <_IntroduceText>To iterate is human, to recurse divine.</_IntroduceText>
      </_InformationWrapper>
      <_InformationListWrapper>
        {InformationList.map((element: InformationListType) => (
          <IconListItem key={element.id} {...element} />
        ))}
      </_InformationListWrapper>
    </_Wrapper>
  );
};

export default Header;

const _Wrapper = styled.header`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 90px 40px;
  background-color: ${({ theme }) => theme.color.white};
`;

const _ProfileImage = styled(Image)`
  width: 300px;
  height: 300px;
  border-radius: 30px;
`;

const _Name = styled.span`
  ${({ theme }) => theme.font.title2};
`;

const _FieldText = styled.span`
  ${({ theme }) => theme.font.title3};
`;

const _IntroduceText = styled.span`
  ${({ theme }) => theme.font.body4};
  word-break: keep-all;
`;

const _InformationWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const _InformationListWrapper = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
