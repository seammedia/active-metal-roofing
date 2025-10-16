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
    image: '/assets/img/ego.png',
    alt: 'Ego Pharmaceuticals',
  },
  {
    id: 'jubilee-aquatic-centre',
    title: 'Jubilee Aquatic Centre',
    image: '/assets/img/jubilee.png',
    alt: 'Jubilee Aquatic Centre',
  },
  {
    id: 'padua-college',
    title: 'Padua College',
    image: '/assets/img/padua_College.png',
    alt: 'Padua College',
  },
  {
    id: 'glen-waverly-primary-school',
    title: 'Glen Waverly Primary School',
    image: '/assets/img/glen_waverly_primary.png',
    alt: 'Glen Waverly Primary School',
  },
  {
    id: 'bowens-croydon',
    title: 'Bowens Croydon',
    image: '/assets/img/bowens.png',
    alt: 'Bowens Croydon',
  },
  {
    id: 'mercedes-waverly',
    title: 'Mercedes Waverly',
    image: '/assets/img/mercedes_waverly.png',
    alt: 'Mercedes Waverly',
  },
];
