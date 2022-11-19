import {FC} from 'react';

import styles from './Admin.module.scss';
import {Meta} from "@/utils/meta/Meta";
import {Statistics} from "@/screens/admin/home/Statistics/Statistics";
import {Heading} from "@/ui/heading/Heading";
import {AdminNavigation} from "@/ui/adminNavigation/AdminNavigation";

interface IAdminProps {
}

export const Admin: FC<IAdminProps> = () => {
  return (
    <Meta title={'Admin panel'}>
      <AdminNavigation />
      <Heading title={'Some statistics'}/>
      <Statistics/>
    </Meta>
  );
};