import { StaticImageData } from 'next/image';

// Import project images from public folder
import egoImg from '@/public/assets/img/ego.png';
import jubileeImg from '@/public/assets/img/jubilee.png';
import paduaImg from '@/public/assets/img/padua_College.png';
import glenImg from '@/public/assets/img/glen_waverly_primary.png';
import bowensImg from '@/public/assets/img/bowens.png';
import mercedesImg from '@/public/assets/img/mercedes_waverly.png';

export interface Project {
  id: string;
  title: string;
  image: StaticImageData;
  alt: string;
}

export const featuredProjects: Project[] = [
  {
    id: 'ego-pharmaceuticals',
    title: 'Ego Pharmaceuticals',
    image: egoImg,
    alt: 'Ego Pharmaceuticals',
  },
  {
    id: 'jubilee-aquatic-centre',
    title: 'Jubilee Aquatic Centre',
    image: jubileeImg,
    alt: 'Jubilee Aquatic Centre',
  },
  {
    id: 'padua-college',
    title: 'Padua College',
    image: paduaImg,
    alt: 'Padua College',
  },
  {
    id: 'glen-waverly-primary-school',
    title: 'Glen Waverly Primary School',
    image: glenImg,
    alt: 'Glen Waverly Primary School',
  },
  {
    id: 'bowens-croydon',
    title: 'Bowens Croydon',
    image: bowensImg,
    alt: 'Bowens Croydon',
  },
  {
    id: 'mercedes-waverly',
    title: 'Mercedes Waverly',
    image: mercedesImg,
    alt: 'Mercedes Waverly',
  },
];
