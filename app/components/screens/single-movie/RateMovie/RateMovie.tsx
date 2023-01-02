import {FC} from 'react';
import {useAuth} from "@/hooks/useAuth";
import {useRateMovie} from "@/screens/single-movie/RateMovie/useRateMovie";

import styles from './RateMovie.module.scss';
import StarRatingComponent from "react-star-rating-component";
import {AuthButton} from "@/ui/video-player/AuthPlaceholder/AuthButton";

interface IRateMovieProps {
  movieId: string
  slug: string
}

const RateMovie: FC<IRateMovieProps> = ({movieId, slug}) => {

  const {user} = useAuth()

  const {handleClick, rating, isSended} = useRateMovie(movieId)
  return (
    <div className={styles.wrapper}>
      <h3>How do you like the movie?</h3>
      <p>Ratings improve recommendations</p>
      {user
        ? <>
          {isSended ?
            (<div className={styles.thanks}>Thanks for rating!</div>)
            : <StarRatingComponent name={'star-rating'}
                                   value={rating}
                                   onStarClick={handleClick}
                                   emptyStarColor="#4f4f4f"
            />
          }
        </>
        : <AuthButton slug={slug}/>
      }
    </div>
  );
};

export default RateMovie