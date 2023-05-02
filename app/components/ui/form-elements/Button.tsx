import {FC} from 'react';
import {IButton} from "@/ui/form-elements/form.interface";

import styles from './form.module.scss';
import cn from "classnames";

interface IButtonProps {
}

export const Button: FC<IButton> = ({children, className, ...rest}) => {
  return (
    <button className={cn(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};