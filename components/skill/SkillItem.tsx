import styled from '@emotion/styled';
import { SkillType } from '@/types/skill';
import Image from 'next/image';

const SkillItem = (props: SkillType) => {
  const { skillName, skillImage, skillDescription }: SkillType = props;
  
  return (
    <_Wrapper>
      <_SkillImage src={skillImage} alt={skillName} />
      <_InformationWrapper>
        <_NameText>{skillName}</_NameText>
        <_DescriptionText>{skillDescription}</_DescriptionText>
      </_InformationWrapper>
    </_Wrapper>
  );
};

export default SkillItem;

const _Wrapper = styled.article`
  display: flex;
  margin-bottom: 30px;
`;

const _SkillImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

const _InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 3.125rem;
`;

const _NameText = styled.span`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
`;

const _DescriptionText = styled.span`
  ${({ theme }) => theme.font.body2};
  color: ${({ theme }) => theme.color.black};
`;
