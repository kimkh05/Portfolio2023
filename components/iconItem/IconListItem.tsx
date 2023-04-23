import styled from '@emotion/styled';
import IconBlock from './IconBlock';
import { InformationListType } from '@/types/information';
import { useRef } from 'react';
import { customToast } from '@/utils/toast';

const IconListItem = (props: InformationListType) => {
  const { title, contents, imageUrl, link } = props;
  const ref = useRef<HTMLAnchorElement>(null);

  const onClick = async () => {
    const copiedData: string = ref.current?.innerHTML as string;
    if (title === 'github') return;
    try {
      await navigator.clipboard.writeText(copiedData);
      customToast('클립보드에 복사되었습니다.', 'success');
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <_Wrapper>
      <IconBlock imageUrl={imageUrl} />
      <_InformationWrapper>
        <_Title>{title}</_Title>
        <_Contents ref={ref} href={link && link} onClick={onClick}>
          {contents}
        </_Contents>
      </_InformationWrapper>
    </_Wrapper>
  );
};

export default IconListItem;

const _Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
`;

const _InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 12px;
`;

const _Title = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body3};
`;

const _Contents = styled.a`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body4};
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
