export interface Project {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export const featuredProjects: Project[] = [
  {
    id: 'ego-pharmaceuticals',
    title: 'Ego Pharmaceuticals',
    image: '/img/ego.png',
    alt: 'Ego Pharmaceuticals',
  },
  {
    id: 'jubilee-aquatic-centre',
    title: 'Jubilee Aquatic Centre',
    image: '/img/jubilee.png',
    alt: 'Jubilee Aquatic Centre',
  },
  {
    id: 'padua-college',
    title: 'Padua College',
    image: '/img/padua_College.png',
    alt: 'Padua College',
  },
  {
    id: 'glen-waverly-primary-school',
    title: 'Glen Waverley Primary School',
    image: '/img/glen_waverly_primary.png',
    alt: 'Glen Waverley Primary School',
  },
  {
    id: 'bowens-croydon',
    title: 'Bowens Croydon',
    image: '/img/bowens.png',
    alt: 'Bowens Croydon',
  },
  {
    id: 'mercedes-waverly',
    title: 'Mercedes Waverley',
    image: '/img/mercedes_waverly.png',
    alt: 'Mercedes Waverley',
  },
];
