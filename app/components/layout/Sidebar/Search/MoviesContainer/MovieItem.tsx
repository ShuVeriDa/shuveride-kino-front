import {FC} from 'react';
import {IMovie} from "@/shared/types/movie.types";

import styles from './MoviesList.module.scss'
import Link from "next/link";
import {getGenreUrl, getMovieUrl} from "@/config/url.config";
import Image from "next/image";
import {getGenresListEach} from "@/utils/movie/getGenresListEach";
import {MaterialIcon} from "@/ui/MaterialIcon";

export const MovieItem: FC<{movie: IMovie}> = ({movie}) => {
  return (
    <div className={styles.item}>
      <Link href={getMovieUrl(movie.slug)}>
        <Image src={movie.poster} alt={movie.title} draggable={false} width={65} height={95} priority/>
      </Link>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>
            {movie.title}
          </div>
          <div className={styles.genres}>
            {movie.genres.map((genre, i) => <Link key={genre._id} href={getGenreUrl(genre.slug)}>
              {getGenresListEach(i, movie.genres.length, genre.name)}
            </Link>)}
          </div>
        </div>

        <div className={styles.rating}>
          <MaterialIcon name={"MdStarRate"} />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};