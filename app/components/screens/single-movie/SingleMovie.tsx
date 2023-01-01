import {FC} from 'react';
import {IMoviePageProps} from "../../../../pages/movie/[slug]";
import {Meta} from "@/utils/meta/Meta";
import {Banner} from "@/ui/banner/Banner";
import {SubHeading} from "@/ui/heading/SubHeading";
import {Gallery} from "@/ui/gallery/Gallery";
import {Content} from "@/screens/single-movie/Content/Content";
// import {VideoPlayer} from "@/ui/video-player/VideoPlayer";
import dynamic from "next/dynamic";

const DynamicPlayer = dynamic(() => import("@/ui/video-player/VideoPlayer"), {
  ssr: false
})

const SingleMovie: FC<IMoviePageProps> = ({movie, similarMovies}) => {
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

      {/*  Rating*/}
    </Meta>
  );
};

export default SingleMovie