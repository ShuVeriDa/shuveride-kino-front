import {FC} from 'react';
import {IMoviePageProps} from "../../../../pages/movie/[slug]";
import {Meta} from "@/utils/meta/Meta";
import {Banner} from "@/ui/banner/Banner";
import {SubHeading} from "@/ui/heading/SubHeading";
import {Gallery} from "@/ui/gallery/Gallery";
import {Content} from "@/screens/single-movie/Content/Content";

const SingleMovie: FC<IMoviePageProps> = ({movie, similarMovies}) => {
  return (
    <Meta title={movie.title} description={`Watch ${movie?.title}`}>
      <Banner image={movie.bigPoster}
              Detail={() => <Content movie={movie} />}
      />

    {/*  Video player*/}

      <div className='mt-12'>
        <SubHeading title={"Similar"}/>
        <Gallery items={similarMovies} />
      </div>

    {/*  Rating*/}
    </Meta>
  );
};

export default SingleMovie