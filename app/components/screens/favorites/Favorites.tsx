import {FC} from 'react';

import styles from './Favorites.module.scss';
import {Meta} from "@/utils/meta/Meta";
import {Heading} from "@/ui/heading/Heading";
import {useFavorites} from "@/screens/favorites/useFavorites";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import {FavoriteItem} from "@/screens/favorites/FavoriteItem";
import {useAuth} from "@/hooks/useAuth";

interface IFavoritesProps {
}

export const Favorites: FC<IFavoritesProps> = () => {
  const {isLoading, favoriteMovies} = useFavorites()

  const {user} = useAuth()

  if(!user) return null

  return (
    <Meta title={'Favorites'}>
      <Heading title={'Favorites'}/>
      <section className={styles.favorites}>
        {isLoading ? (
          <SkeletonLoader count={3}
                          className={styles.skeletonLoader}
                          containerClassName={styles.containerLoader}
          />
        ) : (
          favoriteMovies?.map((movie) => (
            <FavoriteItem key={movie._id} movie={movie} />
          ))
        )}

      </section>
    </Meta>
  );
};