type TFilms = IShow | IChannel;
type TFetchFilms = (...args: string[]) => Promise<void>;

interface IServerResp {
  backgrounds: IBg[];
  items: TFilms[];
}

interface IShow {
  type: string;
  title: string;
  imdb_rate: number;
  is_new?: boolean;
  country: string;
  year: number;
  length: number;
  num_seasons: number;
  min_age: number;
  genres: string[];
  poster: string;
  keyframe: string;
}

interface IChannel {
  type: string;
  title: string;
  channel: string;
  on_air: string;
  min_age: number;
  poster: string;
  keyframe: string;
}

interface IBg {
  url: string;
}

interface ISortPageProps {
  films: TFilms[];
}

interface ISliderProps {
  title?: string;
  films: TFilms[];
}

interface ISearchBarProps {
  isSearch: boolean;
  search: TFetchFilms;
  showFilters: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IBgSlidersProps {
  allBgs: string[];
  current: number;
}

interface ICountGenre {
  channels: number;
  shows: number;
  movies: number;
}

interface IFiltersProps {
  count: ICountGenre;
  filter: IFilterState;
  setFilter: React.Dispatch<IActionType>;
}

interface IFilterState {
  all: boolean;
  channels: boolean;
  shows: boolean;
  movies: boolean;
}

interface IActionType {
  type: string;
}
