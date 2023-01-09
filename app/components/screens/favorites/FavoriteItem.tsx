import {FC} from 'react';
import {IMovie} from "@/shared/types/movie.types";

import styles from './Favorites.module.scss';
import {FavoriteButton} from "@/screens/single-movie/FavoriteButton/FavoriteButton";
import Link from "next/link";
import {getMovieUrl} from "@/config/url.config";
import Image from "next/legacy/image";
import {useAuth} from "@/hooks/useAuth";

export const FavoriteItem: FC<{ movie: IMovie }> = ({movie}) => {
  const {user} = useAuth()
  return (
    <div className={styles.itemWrapper}>
      {user && <FavoriteButton movieId={movie._id}/>}
      <Link href={getMovieUrl(movie.slug)} className={styles.item}>
        <Image alt={movie.title}
               src={movie.bigPoster}
               layout={'fill'}
               draggable={false}
               priority
        />

        <div className={styles.title}>{movie.title}</div>
      </Link>
    </div>
  );
};