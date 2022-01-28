import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovies, deleteMovie } from '../../actions/movies.actions';
import MovieCard from '../MovieCard';
import LinearBuffer from '../Loader'
import { STATUS } from '../../constants';

import './App.css';
import Typography from '@mui/material/Typography';
import { isEmpty } from '../../utils';

function App() {
  const { allMovies, status } = useSelector((state) => state.movies);
  console.log('allMovies:', allMovies);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]); //dispatch is stable we do not need to put it here but we avoid disabling the rule.

  const handleDelete = (movie) => {
    dispatch(deleteMovie(movie));
  };

  if (status === STATUS.PENDING) {
    return(
      <>
  
<Typography variant="h2" component="h2">
  Chargement des films...
</Typography>;
       <LinearBuffer/>
      </>
      )
    }
    
    if (status === STATUS.FAILURE) {
      return <h1>Impossible de charger les films...</h1>;
    }
    
    if (status === STATUS.SUCCESS) {
      return (
        <div className="App">
        {isEmpty(allMovies) && <h1>Aucun film disponible</h1>}

        {allMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    );
  }

  // status === "idle", si on a pas de films ça sert à rien de rendre l'app: null ou message d'erreur
  return null;
}

export default App;
