import {FC} from 'react';

interface INotAuthFavoritesProps {
}

export const NotAuthFavorites: FC<INotAuthFavoritesProps> = () => {
  return (
    <div className='mt-11 bg-gray-700 bg-opacity-20 py-3 rounded-lg text-white text-opacity-80'>
      For viewing favorites please authorize!
    </div>
  );
};