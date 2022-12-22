import {FC} from 'react';
import makeAnimated from 'react-select/animated'
import {IOption, ISelect} from "@/ui/select/select.interface";
import ReactSelect, {OnChangeValue} from "react-select";

import styles from './Select.module.scss';
import formStyles from '../form-elements/Form.module.scss'

interface ISelectProps {
}

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = (
  {
    field, isMulti, options,
    isLoading, error, placeholder
  }) => {

  const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
    field.onChange(
      isMulti
        ? (newValue as IOption[]).map((item: IOption) => item.value)
        : (newValue as IOption).value
    )
  }

  const getValue = () => {
    if (field.value) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value)
    } else {
      return isMulti ? [] : ''
    }
  }

  return (
    <div className={styles.selectContainer}>
      <label>
        <span>{placeholder}</span>
        <ReactSelect
          classNamePrefix='custom-select'
          options={options}
          value={getValue()}
          isMulti={isMulti}
          onChange={onChange}
          components={animatedComponents}
          isLoading={isLoading}
          placeholder={''}
        />
      </label>
      {error && <div className={formStyles.error}>{error.message}</div>}
    </div>
  );
};

export default Select
