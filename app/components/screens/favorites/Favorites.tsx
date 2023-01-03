import {FC} from 'react';

import styles from './Favorites.module.scss';
import {Meta} from "@/utils/meta/Meta";
import {Heading} from "@/ui/heading/Heading";
import {useFavorites} from "@/screens/favorites/useFavorites";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import movies from "../../../../pages/manage/movies";
import {FavoriteItem} from "@/screens/favorites/FavoriteItem";
interface IFavoritesProps {
}

export const Favorites: FC<IFavoritesProps> = () => {
  const {isLoading, favoriteMovies} = useFavorites()

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