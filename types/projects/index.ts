import { StaticImageData } from "next/image";

export interface ProjectType{
    id: number;
    imageUrl: StaticImageData;
    title: string;
    period: string;
    skill: string[];
    link: string | string[];
    introduce: string;
    video?: string;
}