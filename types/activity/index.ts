import { StaticImageData } from "next/image";

export interface DSMActivityType {
  id: number;
  imageUrl: StaticImageData
  title: string;
  link: string;
  date: number
}
