import {FC} from 'react';
import {Controller, useForm} from "react-hook-form";
import {Meta} from "@/utils/meta/Meta";
import {AdminNavigation} from "@/ui/adminNavigation/AdminNavigation";
import {Heading} from "@/ui/heading/Heading";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import {Field} from "@/ui/form-elements/Field";
import {SlugField} from "@/ui/form-elements/SlugField/SlugField";
import {generateSlug} from "@/utils/string/generateSlug";
import {Button} from "@/ui/form-elements/Button";

import formStyles from '../../../ui/form-elements/admin-form.module.scss'
import UploadField from "@/ui/form-elements/UploadField/UploadField";
import {IMovieEditInput} from "@/screens/admin/movie/movie-edit.inteface";
import {useMovieEdit} from "@/screens/admin/movie/useMovieEdit";
import {useAdminGenres} from "@/screens/admin/movie/useAdminGenres";
import {useAdminActors} from "@/screens/admin/movie/useAdminActors";
import dynamic from "next/dynamic";

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
  ssr: false
})

interface IMovieEditProps {
}


export const MovieEdit: FC<IMovieEditProps> = () => {
  const {
    handleSubmit,
    register,
    formState: {errors},
    setValue,
    getValues,
    control
  } = useForm<IMovieEditInput>({
    mode: 'onChange'
  })

  const {isLoading, onSubmit} = useMovieEdit(setValue)

  const {isLoading: isGenresLoading, data: genres} = useAdminGenres()
  const {isLoading: isActorLoading, data: actors} = useAdminActors()

  return (
    <Meta title="Edit movie">
      <AdminNavigation/>
      <Heading title="Edit movie"/>
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
        {isLoading ? <SkeletonLoader count={3}/>
          : <>
            <div className={formStyles.fields}>
              <Field {...register('title', {
                required: "Title is required!"
              })}
                     placeholder={"Title"}
                     error={errors.title}
              />

              <SlugField
                register={register}
                error={errors.slug}
                generate={() => {
                  setValue('slug', generateSlug(getValues('title')))
                }}
              />

              <Field {...register('parameters.country', {
                required: "Country is required!"
              })}
                     placeholder={"Country"}
                     error={errors.parameters?.country}
                     style={{width: "31%"}}
              />

              <Field {...register('parameters.duration', {
                required: "Duration is required!"
              })}
                     placeholder={"Duration (min.)"}
                     error={errors.parameters?.duration}
                     style={{width: "31%"}}
              />

              <Field {...register('parameters.year', {
                required: "Year is required!"
              })}
                     placeholder={"Year"}
                     error={errors.parameters?.year}
                     style={{width: "31%"}}
              />

              <Controller control={control}
                          name='genres'
                          render={({
                                     field,
                                     fieldState: {error}
                                   }) => (
                            <DynamicSelect
                              field={field}
                              options={genres || []}
                              isLoading={isGenresLoading}
                              isMulti
                              placeholder={'Genres'}
                              error={error}
                            />
                          )}
                          rules={{
                            required: "Please select at least one genre !"
                          }}
              />

              <Controller control={control}
                          name='actors'
                          render={({
                                     field,
                                     fieldState: {error}
                                   }) => (
                            <DynamicSelect
                              field={field}
                              options={actors || []}
                              isLoading={isActorLoading}
                              isMulti
                              placeholder={'Actors'}
                              error={error}
                            />
                          )}
                          rules={{
                            required: "Please select at least one actor !"
                          }}
              />


              <Controller control={control}
                          name='poster'
                          defaultValue=''
                          render={({
                                     field: {value, onChange},
                                     fieldState: {error}
                                   }) => (
                            <UploadField onChange={onChange}
                                         value={value}
                                         error={error}
                                         folder={'movies'}
                                         placeHolder={'Poster'}
                            />
                          )}
                          rules={{
                            required: "Poster is required"
                          }}
              />



              <Controller control={control}
                          name='bigPoster'
                          defaultValue=''
                          render={({
                                     field: {value, onChange},
                                     fieldState: {error}
                                   }) => (
                            <UploadField onChange={onChange}
                                         value={value}
                                         error={error}
                                         folder={'movies'}
                                         placeHolder={'Big poster'}
                            />
                          )}
                          rules={{
                            required: "Big poster is required"
                          }}
              />

              <Controller control={control}
                          name='videoUrl'
                          defaultValue=''
                          render={({
                                     field: {value, onChange},
                                     fieldState: {error}
                                   }) => (
                            <UploadField onChange={onChange}
                                         value={value}
                                         error={error}
                                         folder={'movies'}
                                         placeHolder={'Video'}
                                         style={{marginTop: -25}}
                                         isNoImage
                            />
                          )}
                          rules={{
                            required: "Video is required"
                          }}
              />
            </div>
            <Button>Update</Button>
          </>
        }
      </form>
    </Meta>
  )
}
