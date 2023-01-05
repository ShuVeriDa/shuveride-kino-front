import {FC} from 'react';
import {ICollection} from "@/screens/collections/collections.interface";
import Link from "next/link";
import {getGenreUrl} from "@/config/url.config";

import styles from './Collections.module.scss';
import CollectionsImage from "@/screens/collections/CollectionsImage";
import cn from "classnames";
interface ICollectionsItemProps {
}

export const CollectionsItem: FC<{collection: ICollection}> = ({collection}) => {
  return (
   <Link href={getGenreUrl(collection.slug)} className={styles.collection}>
      <CollectionsImage collection={collection} />

     <div className={styles.content}>
       <div className={styles.title}>{collection.title}</div>
     </div>

     <div className={cn(styles.behind, styles.second)}>
        <CollectionsImage collection={collection} />
     </div>
     <div className={cn(styles.behind, styles.third)}>
        <CollectionsImage collection={collection} />
     </div>

   </Link>
  );
};