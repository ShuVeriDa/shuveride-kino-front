import {FC} from 'react';

import styles from './Profile.module.scss';
import {useForm} from "react-hook-form";
import {IProfileInput} from "@/screens/profile/profile.interface";
import {useProfile} from "@/screens/profile/useProfile";
import {Heading} from "@/ui/heading/Heading";
import {AuthFields} from "@/screens/auth/AuthFields";
import {Button} from "@/ui/form-elements/Button";
import {Meta} from "@/utils/meta/Meta";
import {SkeletonLoader} from "@/ui/SkeletonLoader";

interface IProfileProps {
}

export const Profile: FC<IProfileProps> = () => {

  const {register, handleSubmit, formState, setValue} = useForm<IProfileInput>({
    mode: 'onChange'
  })

  const {isLoading, onSubmit} = useProfile(setValue)

  return (
    <Meta title={'Profile'}>
      <Heading title={'Profile'} className="mb-6"/>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLoading
          ? <SkeletonLoader count={2}/>
          : <AuthFields register={register}
                        formState={formState}

          />
        }

        <Button>Update</Button>
      </form>
    </Meta>
  );
};