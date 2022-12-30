import {FC} from 'react';

import styles from './Banner.module.scss';
import Image from "next/legacy/image";
interface IBannerProps {
  image: string
  Detail?: FC | null
}

export const Banner: FC<IBannerProps> = ({Detail, image}) => {
  return (
    <div className={styles.banner}>
      <Image src={image}
             draggable={false}
             layout={'fill'}
             className='image-like-bg object-top'
             unoptimized
             priority
             alt=""
      />
      {Detail && <Detail />}
    </div>
  );
};