import {FC} from 'react';
import {usePopularGenres} from "@/components/layout/Navigation/MenuContainer/genres/usePopularGenres";
import {Menu} from "@/components/layout/Navigation/MenuContainer/Menu/Menu";

interface IGenreMenuProps {
}

export const GenreMenu: FC<IGenreMenuProps> = () => {

  const {isLoading, data} = usePopularGenres()

  return isLoading
    ? <div className='mx-11 mb-6'>Loading...</div>
    : <Menu menu={{
      title: 'Popular genres',
      items: data || []
    }}
    />
};