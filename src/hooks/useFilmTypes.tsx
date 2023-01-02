import { useMemo } from 'react';

export default function useFilmTypes(films: TFilms[]) {
  const tvChannels = useMemo(() => films.filter(item => item.type === 'tvchannel'), [films]);

  const tvShows = useMemo(() => films.filter(item => item.type === 'tvseries'), [films]);

  const tvMovies = useMemo(() => films.filter(item => item.type === 'movie'), [films]);

  return [tvChannels, tvShows, tvMovies];
}
