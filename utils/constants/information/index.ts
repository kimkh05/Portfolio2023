import { InformationListType } from '@/types/information';
import { GithubIcon, PhoneIcon, EmailIcon } from '@/assets';

export const InformationList: InformationListType[] = [
  {
    id: 1,
    title: 'Github',
    contents: 'kimkh05',
    link: 'https://github.com/kimkh05',
    imageUrl: GithubIcon,
  },
  {
    id: 2,
    title: 'Phone',
    contents: '010-3312-5024',
    imageUrl: PhoneIcon,
  },
  {
    id: 3,
    title: 'Email',
    contents: 'nestjs01@naver.com',
    imageUrl: EmailIcon,
  },
];
