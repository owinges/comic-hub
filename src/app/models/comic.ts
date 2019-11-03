import { Character } from './character';

export interface Comic {
  id: number;
  slug: string;
  name: string;
  description: string;
  issueNumber: string;
  pages: number;
  price: number;
  releaseDate: string;
  image: string;
  characters: Character[];
}
