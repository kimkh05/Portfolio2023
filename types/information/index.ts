import { StaticImageData } from 'next/image';

export interface InformationListType {
  id: number;
  title: string;
  contents: string;
  link?: string;
  imageUrl: StaticImageData;
}
