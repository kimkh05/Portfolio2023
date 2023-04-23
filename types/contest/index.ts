import { StaticImageData } from 'next/image';

export type FieldType = '기획' | '디자인' | '프론트엔드' | '백엔드';

export interface ContestType {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  period: string;
  topic: string;
  numberOfPeople: number;
  field: FieldType[];
  introduce: string;
  award?: string;
}
