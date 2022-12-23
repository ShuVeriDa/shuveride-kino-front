import {FC} from 'react';

import styles from './SlideArrow.module.scss';
import cn from "classnames";
import {MaterialIcon} from "@/ui/MaterialIcon";

interface ISlideArrowProps {
  variant: 'left' | 'right'
  clickHandler: () => void
}

export const SlideArrow: FC<ISlideArrowProps> = ({clickHandler, variant}) => {

  const isLeft = variant === 'left'

  return (
    <button onClick={clickHandler}
            className={
              cn(styles.arrow, {
                [styles.left]: isLeft,
                [styles.right]: !isLeft,
              })}
    >
      <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
    </button>
  );
};