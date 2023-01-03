import {FC} from 'react';
import {PopularMovies} from "@/components/layout/Sidebar/Search/MoviesContainer/PopularMovies";
import dynamic from "next/dynamic";

interface IMoviesContainerProps {
}

const DynamicFavoriteMovies = dynamic(() => import('@/components/layout/Sidebar/Search/MoviesContainer/FavoriteMovies/FavoriteMovies'), {
  ssr: false
})

export const MoviesContainer: FC<IMoviesContainerProps> = () => {
  return (
    <div>
      <PopularMovies/>
      <DynamicFavoriteMovies/>
    </div>
  );
};