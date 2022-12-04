import {FC} from 'react';

import styles from '../../Admin.module.scss';
import {CountUsers} from "@/screens/admin/home/Statistics/CountUsers";
import {PopularMovie} from "@/screens/admin/home/Statistics/PopularMovie";

interface IStatisticsProps {
}

export const Statistics: FC<IStatisticsProps> = () => {
  return (
    <div className={styles.statistics}>
      <CountUsers />
      <PopularMovie />

    </div>
  );
};