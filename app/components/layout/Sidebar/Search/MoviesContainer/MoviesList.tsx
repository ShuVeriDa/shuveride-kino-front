import {FC} from 'react';
import {IMovieList} from "@/components/layout/Sidebar/Search/MoviesContainer/movie-list.interface";

import styles from './MoviesList.module.scss'
import {MovieItem} from "@/components/layout/Sidebar/Search/MoviesContainer/MovieItem";
import Link from "next/link";

export const MoviesList: FC<IMovieList> = ({movies, title, link}) => {
  return (
    <div className={styles.list}>
      <div className={styles.heading}>
        {title}
      </div>
      {movies.map(movie => <MovieItem key={movie._id} movie={movie}/>)}
      <Link href={link} className={styles.button}>
        See more
      </Link>
    </div>
  );
};