import {FC} from 'react';

import styles from './Catalog.module.scss';
import {ICatalog} from "@/ui/catalog-movies/catalog.interface";
import {Meta} from "@/utils/meta/Meta";
import {Heading} from "@/ui/heading/Heading";
import {Description} from "@/ui/heading/Description";
import {GalleryItem} from "@/ui/gallery/GalleryItem";
import {getMovieUrl} from "@/config/url.config";

export const Catalog: FC<ICatalog> = ({title, movies, description}) => {
  return (
    <Meta title={title} description={description}>
      <Heading title={title} className={styles.heading}/>

      {description && <Description text={description} className={styles.descriptions}/>}

      <section className={styles.movies}>
        {movies.map(movie => <GalleryItem key={movie._id}
                                          item={{
                                            name: movie.title,
                                            link: getMovieUrl(movie.slug),
                                            posterPath: movie.bigPoster,
                                            content: {title: movie.title}
                                          }}
                                          variant={'horizontal'}
          />
        )}
      </section>

    </Meta>
  );
};