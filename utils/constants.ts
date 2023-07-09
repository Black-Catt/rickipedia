import { Gender, Species, Status } from '../redux/features/charactersSlice';
export interface FilterOption {
  title: string;
  values: Gender[] | Status[] | Species[];
}

export const genders: FilterOption[] = [
  { title: 'gender', values: ['Male', 'Female', 'Genderless', 'Unknown'] },
];

export const statuses: FilterOption[] = [
  { title: 'status', values: ['Alive', 'Dead', 'Unknown'] },
];

export const species: FilterOption[] = [
  {
    title: 'species',
    values: [
      'Human',
      'Alien',
      'Humanoid',
      'Poopybutthole',
      'Mythological',
      'Unknown',
      'Animal',
      'Disease',
      'Robot',
      'Cronenberg',
      'Planet',
    ],
  },
];

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'episodes',
    url: '/episodes',
  },
  {
    id: 3,
    text: 'locations',
    url: '/locations',
  },
];
