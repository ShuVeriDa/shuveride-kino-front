import {FC} from 'react';
import {useFavorites} from "@/screens/favorites/useFavorites";
import {useAuth} from "@/hooks/useAuth";
import {NotAuthFavorites} from "@/components/layout/Sidebar/Search/MoviesContainer/FavoriteMovies/NotAuthFavorites";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import {MoviesList} from "@/components/layout/Sidebar/Search/MoviesContainer/MoviesList";

interface IFavoriteMoviesProps {
}

const FavoriteMovies: FC<IFavoriteMoviesProps> = () => {
  const {favoriteMovies, isLoading} = useFavorites()
  const {user} = useAuth()

  if (!user) return <NotAuthFavorites/>
  return isLoading
    ? <div className='mt-11'>
      <SkeletonLoader count={3} className='h-28 mb-4'/>
    </div>
    : <MoviesList link='/favorites'
                  movies={favoriteMovies?.slice(0, 3) || []}
                  title={'Favorites'}
    />
};

export default FavoriteMovies