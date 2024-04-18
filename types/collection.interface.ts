import { StaticImageData } from "next/image";

export interface CollectionPreview {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
}
