import {FC} from 'react';

import {Meta} from "@/utils/meta/Meta";
import {Banner} from "@/ui/banner/Banner";
import {SubHeading} from "@/ui/heading/SubHeading";
import {Gallery} from "@/ui/gallery/Gallery";
import {Content} from "@/screens/single-movie/Content/Content";
// import {VideoPlayer} from "@/ui/video-player/VideoPlayer";
import dynamic from "next/dynamic";
import {useUpdateCountOpened} from "@/screens/single-movie/RateMovie/useUpdateCountOpened";
import {IMoviePageProps} from "../../../../pages/movie/[slug]";

const DynamicPlayer = dynamic(() => import("@/ui/video-player/VideoPlayer"), {
  ssr: false
})
const DynamicRateMovie = dynamic(() => import("@/screens/single-movie/RateMovie/RateMovie"), {
  ssr: false
})


const SingleMovie: FC<IMoviePageProps> = ({movie, similarMovies}) => {
  useUpdateCountOpened(movie.slug)
  return (
    <Meta title={movie.title} description={`Watch ${movie?.title}`}>
      <Banner image={movie.bigPoster}
              Detail={() => <Content movie={movie}/>}
      />

      <DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug}/>

      <div className='mt-12'>
        <SubHeading title={"Similar"}/>
        <Gallery items={similarMovies}/>
      </div>

      <DynamicRateMovie movieId={movie._id} slug={movie.slug} />
    </Meta>
  );
};

export default SingleMovie