import {ChangeEvent, FC} from 'react';

import styles from './SearchField.module.scss'
import {MaterialIcon} from "@/ui/MaterialIcon";



interface ISearchFieldProps {
  searchTerm: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField: FC<ISearchFieldProps> = ({handleSearch, searchTerm}) => {
  return (
    <div className={styles.search}>
      <MaterialIcon name="MdSearch" />
      <input placeholder={"Search"} value={searchTerm} onChange={handleSearch} type="text"/>
    </div>
  );
};