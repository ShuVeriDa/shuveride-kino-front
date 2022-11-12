import {FC} from 'react';
import {Menu} from "@/components/layout/Navigation/MenuContainer/Menu/Menu";
import {firstMenu, userMenu} from "@/components/layout/Navigation/MenuContainer/menu.data";
import {GenreMenu} from "@/components/layout/Navigation/MenuContainer/genres/GenreMenu";


export const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu}/>
      <GenreMenu />
      <Menu menu={userMenu}/>
    </div>
  );
};