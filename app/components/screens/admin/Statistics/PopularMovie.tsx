import {FC} from 'react';
import {useQuery} from "react-query";
import {AdminService} from "@/services/admin.service";

import styles from './../Admin.module.scss';
import {MovieService} from "@/services/movie.service";
import {IMovie} from "@/shared/types/movie.types";
import cn from "classnames";
import {SubHeading} from "@/ui/heading/SubHeading";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import Link from "next/link";
import {getMovieUrl} from "@/config/url.config";
import Image from "next/image";

interface IPopularMovieProps {
}

export const PopularMovie: FC<IPopularMovieProps> = () => {
  const {isLoading, data: movie} = useQuery("Most popular movie in admin", () => MovieService.getPopularMovies(), {
    select: (data): IMovie => data[0]
  })
  return (
    <div className={cn(styles.block, styles.popular)}>
      <SubHeading title={"The most popular movie"}/>

      {isLoading
        ? <SkeletonLoader className='h-48'/>
        : movie && <>
        <h3>Opened {movie.countOpened} times</h3>
        <Link href={getMovieUrl(movie.slug)}>
          <Image width={285}
                 height={176}
                 src={movie.bigPoster}
                 alt={movie.title}
                 className={styles.image}
                 unoptimized
          />
        </Link>
      </>
      }
    </div>
  );
};