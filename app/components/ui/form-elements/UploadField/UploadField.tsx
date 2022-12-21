import {FC} from "react";
import {IUploadField} from "@/ui/form-elements/form.interface";
import {useUpload} from "@/ui/form-elements/UploadField/useUpload";
import cn from "classnames";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import Image from "next/legacy/image";


import styles from '../Form.module.scss';

const UploadField: FC<IUploadField> = (
  {
    folder, onChange, style, error,
    value, placeHolder, isNoImage = false
  }
) => {
  const {isLoading, uploadFile} = useUpload(onChange, folder)

  return <div className={cn(styles.field, styles.uploadField)} style={style}>
    <div className={styles.uploadFlex}>
      <label>
        <span>{placeHolder}</span>
        <input type="file" onChange={uploadFile}/>
        {error && <div className={styles.error}>{error.message}</div>}
      </label>

        {!isNoImage && <div className={styles.uploadImageContainer}>
          {isLoading
            ? <SkeletonLoader count={1} className={'w-full h-full'}/>
            : value && <Image src={value} alt='' layout={'fill'} unoptimized/>
          }
        </div>
        }
    </div>
  </div>
}

export default UploadField