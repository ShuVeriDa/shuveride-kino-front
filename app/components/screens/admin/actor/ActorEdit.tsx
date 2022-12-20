import {FC} from 'react';
import {Controller, useForm} from "react-hook-form";
import {IGenreEditInput} from "@/screens/admin/genre/genre-edit.inteface";
import {useGenreEdit} from "@/screens/admin/genre/useGenreEdit";
import {Meta} from "@/utils/meta/Meta";
import {AdminNavigation} from "@/ui/adminNavigation/AdminNavigation";
import {Heading} from "@/ui/heading/Heading";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import {Field} from "@/ui/form-elements/Field";
import {SlugField} from "@/ui/form-elements/SlugField/SlugField";
import {generateSlug} from "@/utils/string/generateSlug";
import {Button} from "@/ui/form-elements/Button";
import {stripHtml} from 'string-strip-html'


import formStyles from '../../../ui/form-elements/admin-form.module.scss'
import dynamic from "next/dynamic";
import {useActorEdit} from "@/screens/admin/actor/useActorEdit";
import {IActorEditInput} from "@/screens/admin/actor/actor-edit.inteface";


const DynamicTextEditor = dynamic(() => import('@/ui/form-elements/TextEditor'), {
  ssr: false,
})

interface IActorEditProps {
}


export const ActorEdit: FC<IActorEditProps> = () => {
  const {
    handleSubmit,
    register,
    formState: {errors},
    setValue,
    getValues,
    control
  } = useForm<IActorEditInput>({
    mode: 'onChange'
  })

  const {isLoading, onSubmit} = useActorEdit(setValue)
  return (
    <Meta title="Edit actor">
      <AdminNavigation/>
      <Heading title="Edit actor"/>
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ? <SkeletonLoader count={3}/> : <>
          <div className={formStyles.fields}>
            <Field {...register('name', {
              required: "Name is required!"
            })}
                   placeholder={"Name"}
                   error={errors.name}
            />

            <div style={{width: "31%"}}>
              <SlugField register={register} error={errors.slug} generate={() => {
                setValue('slug', generateSlug(getValues('name')))
              }}/>
            </div>

            {/*<Controller control={control}*/}
            {/*            name='photo'*/}
            {/*            defaultValue=''*/}
            {/*            render={({*/}
            {/*                       field: {value, onChange},*/}
            {/*                       fieldState: {error}*/}
            {/*                     }) => (*/}
            {/*              // photo upload*/}
            {/*            )}*/}
            {/*            rules={{*/}
            {/*              required: "Photo is required"*/}
            {/*            }}*/}
            {/*/>*/}

          </div>
          <Button>Update</Button>
        </>
        }
      </form>
    </Meta>
  )
    ;
};
