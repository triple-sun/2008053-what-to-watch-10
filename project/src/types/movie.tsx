import { Genre } from '../const/enums';

type TMovie = {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[]
  runTime: number,
  genre: Genre | string;
  released: number;
  id: number,
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export default TMovie;
