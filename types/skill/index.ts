import { StaticImageData } from 'next/image';

export interface SkillType {
  id: number;
  skillName: string;
  skillImage: StaticImageData;
  skillDescription: string;
}

