import {FC} from 'react';

import styles from './SlugField.module.scss';
import {FieldError, UseFormRegister} from "react-hook-form";
import {Field} from "@/ui/form-elements/Field";

interface ISlugFieldProps {
  error?: FieldError
  register: UseFormRegister<any>
  generate: () => void
}

export const SlugField: FC<ISlugFieldProps> = ({generate, register, error}) => {
  return (
    <div className='relative'>
      <Field {...register('slug', {
        required: "Slug is required!"
      })}
             placeholder={"Slug"}
             error={error}
      />

      <div className={styles.badge} onClick={generate}>
        generate
      </div>
    </div>
  );
};