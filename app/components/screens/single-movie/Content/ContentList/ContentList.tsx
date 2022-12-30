import {FC, Fragment} from 'react';
import {IContentList} from "@/screens/single-movie/Content/content.interface";

import styles from './ContentList.module.scss';
import Link from "next/link";
export const ContentList: FC<IContentList> = ({name, links}) => {
  return (
    <div className={styles.list}>
      <div className={styles.name}>{name}</div>
      <div className={styles.links}>
        {links.map((link, i) => <Fragment key={i}>
          <Link href={link.link}>
            {link.link}
          </Link>
          {i +1 !== links.length ? ', ' : ''}
        </Fragment>)}
      </div>
    </div>
  );
};