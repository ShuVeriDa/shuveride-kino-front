import {FC} from 'react';
import {PopularMovies} from "@/components/layout/Sidebar/Search/MoviesContainer/PopularMovies";
import {FavoriteMovies} from "@/components/layout/Sidebar/Search/MoviesContainer/FavoriteMovies/FavoriteMovies";

interface IMoviesContainerProps {
}

export const MoviesContainer: FC<IMoviesContainerProps> = () => {
  return (
    <div>
      <PopularMovies/>
      <FavoriteMovies/>
    </div>
  );
};