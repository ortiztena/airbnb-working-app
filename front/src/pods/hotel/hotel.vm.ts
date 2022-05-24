export interface Hotel {
  id: string;
  title: string;
  releaseDate: string;
  author: string;
}

export const createEmptyHotel = (): Hotel => ({
  id: undefined,
  title: '',
  releaseDate: '',
  author: '',
});
