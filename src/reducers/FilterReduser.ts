const initialFilterState = { all: true, channels: false, shows: false, movies: false };

function filterReducer(state: IFilterState, action: IActionType) {
  let newState = { ...state };

  switch (action.type) {
    case 'all':
      newState = initialFilterState;
      break;
    case 'channels':
      newState.all = false;
      newState.channels = !newState.channels;
      break;
    case 'shows':
      newState.all = false;
      newState.shows = !newState.shows;
      break;
    case 'movies':
      newState.all = false;
      newState.movies = !newState.movies;
      break;
  }

  if (!Object.values(newState).includes(true)) {
    newState = initialFilterState;
  }

  return newState;
}

export { filterReducer, initialFilterState };
