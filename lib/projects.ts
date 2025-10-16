import { StaticImageData } from 'next/image';

// Import project images directly from assets
import egoImg from '@/assets/img/ego.png';
import jubileeImg from '@/assets/img/jubilee.png';
import paduaImg from '@/assets/img/padua_College.png';
import glenImg from '@/assets/img/glen_waverly_primary.png';
import bowensImg from '@/assets/img/bowens.png';
import mercedesImg from '@/assets/img/mercedes_waverly.png';

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
