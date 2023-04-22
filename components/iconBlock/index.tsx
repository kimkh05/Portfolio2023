import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

interface PropsType {
  imageUrl: StaticImageData;
}

const IconBlock = ({ imageUrl }: PropsType) => {
  return (
    <_Wrapper>
      <Image src={imageUrl} alt="icon" />
    </_Wrapper>
  );
};

export default IconBlock;

const _Wrapper = styled.div`
  width: 75px;
  height: 75px;
  display: grid;
  place-items: center;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.background};
`;
