import { useReducer } from 'react';

import { filterReducer, initialFilterState } from '../reducers/FilterReduser';
import useFilmTypes from '../hooks/useFilmTypes';
import Slider from './Slider';
import Filters from './Filters';

export default function SortFilms({ films }: ISortPageProps) {
  const [channels, shows, movies] = useFilmTypes(films);
  const [filter, setFilter] = useReducer(filterReducer, initialFilterState);
  const countGenre = { channels: channels.length, shows: shows.length, movies: movies.length };

  return (
    <div>
      <Filters filter={filter} setFilter={setFilter} count={countGenre} />
      {(filter.channels || filter.all) && <Slider films={channels} title='TV Channels' />}
      {(filter.shows || filter.all) && <Slider films={shows} title='TV Shows' />}
      {(filter.movies || filter.all) && <Slider films={movies} title='Movies' />}
    </div>
  );
}
