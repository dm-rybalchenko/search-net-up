const DEFAULT_CL = 'filters__item';
const ACTIVE_CL = 'filters__item active';

export default function Filters({ filter, setFilter, count }: IFiltersProps) {
  const countAll = (all: ICountGenre) => all.channels + all.shows + all.movies;

  return (
    <div className='filters'>
      <div onClick={() => setFilter({ type: 'all' })} className={filter.all ? ACTIVE_CL : DEFAULT_CL}>
        All ({countAll(count)})
      </div>
      <div onClick={() => setFilter({ type: 'channels' })} className={filter.channels ? ACTIVE_CL : DEFAULT_CL}>
        TV channels ({count.channels})
      </div>
      <div onClick={() => setFilter({ type: 'shows' })} className={filter.shows ? ACTIVE_CL : DEFAULT_CL}>
        TV shows ({count.shows})
      </div>
      <div onClick={() => setFilter({ type: 'movies' })} className={filter.movies ? ACTIVE_CL : DEFAULT_CL}>
        Movies ({count.movies})
      </div>
    </div>
  );
}
