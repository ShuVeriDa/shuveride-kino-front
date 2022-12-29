import {FC} from 'react';
import {Controller, useForm} from "react-hook-form";
import {Meta} from "@/utils/meta/Meta";
import {AdminNavigation} from "@/ui/adminNavigation/AdminNavigation";
import {Heading} from "@/ui/heading/Heading";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import {Button} from "@/ui/form-elements/Button";
import {IUserEditInput} from "@/screens/admin/user/user-edit.inteface";
import {useUserEdit} from "@/screens/admin/user/useUserEdit";
import {AuthFields} from "@/screens/auth/AuthFields";

interface IUserEditProps {
}

export const UserEdit: FC<IUserEditProps> = () => {
  const {handleSubmit, register, formState, setValue, control} = useForm<IUserEditInput>({mode: 'onChange'})

  const {isLoading, onSubmit} = useUserEdit(setValue)
  return (
    <Meta title="Edit user">
      <AdminNavigation/>
      <Heading title="Edit user"/>
      <form onSubmit={handleSubmit(onSubmit)} className='admin-form'>
        {isLoading
          ? <SkeletonLoader count={3}/>
          : <>
            <AuthFields register={register} formState={formState} isPasswordRequired={false}/>

            <Controller control={control}
                        name='isAdmin'
                        render={({ field }) => (
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              field.onChange(!field.value)
                            }}
                            className="text-link block mb-7"
                          >
                            {field.value ? 'Make it regular user' : 'Make it admin'}
                          </button>
                        )}
            ></Controller>
            <Button>Update</Button>
          </>
        }
      </form>
    </Meta>
  );
};
