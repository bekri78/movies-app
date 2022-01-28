import movies$ from '../movies';
import { isEmpty } from '../utils';

export const GET_MOVIES_START = 'GET_MOVIES_START';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

export const getMovies = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIES_START });
    const movies = await movies$;

    if (!isEmpty(movies)) {
      dispatch({ type: GET_MOVIES_SUCCESS, payload: movies });
      return;
    }

    dispatch({ type: GET_MOVIES_FAILURE, payload: movies });
  };
};

export const DELETE_MOVIE = 'DELETE_MOVIE';
export const deleteMovie = (movie) => {
  return { type: DELETE_MOVIE, payload: movie };
};
