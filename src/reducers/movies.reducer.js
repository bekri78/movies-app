import { DELETE_MOVIE, GET_MOVIES_FAILURE, GET_MOVIES_START, GET_MOVIES_SUCCESS} from '../actions/movies.actions';

const initalState = {
  allMovies: null,
  status: 'idle', // "idle" | "pending" | "success" | "failure"
  // le status permet de dire si c'est pending on affiche "chargement", si c'est success on affiches les movies et si c'est failure on affiche une erreur.
  // idle veut dire "statut de base"
};

const moviesReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_MOVIES_START: {
      return { ...state, status: 'pending' };
    }

    case GET_MOVIES_SUCCESS: {
      const movies = action.payload;
      return { ...state, allMovies: movies, status: 'success' };
    }

    case GET_MOVIES_FAILURE: {
      return { ...state, allMovies: null, status: 'failure' };
    }

    case DELETE_MOVIE: {
      const movie = action.payload;
      const deleted = state.allMovies.filter((item) => item.id !== movie.id);
      return { ...state, allMovies: deleted };
    }

    


    default:
      return state;
  }
};

export default moviesReducer;
