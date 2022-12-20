import {ChangeEvent, useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {useMutation, useQuery} from "react-query";
import {MovieService} from "@/services/movie.service";
import {ITableItem} from "@/ui/adminTable/AdminTable/admin-table.interface";
import {getAdminUrl} from "@/config/url.config";
import {convertMongoDate} from "@/utils/date/convertMongoDate";
import {toastError} from "@/utils/toastError";
import {toastr} from "react-redux-toastr";
import {getGenresUrl} from "@/config/api.config";
import {getGenresList, getGenresListEach} from "@/utils/movie/getGenresListEach";
import {GenreService} from "@/services/genre.service";
import {useRouter} from "next/router";

export const useMovies = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const queryData = useQuery(
    ['movies list', debouncedSearch],
    () => MovieService.getAll(debouncedSearch), {
      select: ({ data }) =>
        data.map(
          (movie): ITableItem => ({
            _id: movie._id,
            editUrl: getAdminUrl(`movie/edit/${movie._id}`),
            items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
          })
        ),

      onError: (error) => {
        toastError(error, 'Movie list')
      }
    }
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value)
  }

  const {push} = useRouter()

  const {mutateAsync: createAsync} = useMutation(
    'create movie',
    () => MovieService.create(),
    {
      onError: (error) => {
        toastError(error, 'Create movie')
      },
      onSuccess: ({data:  _id}) => {
        toastr.success("Create movie", 'create was successful')
        push(getAdminUrl(`movie/edit/${_id}`))
      }
    }
  )

  const {mutateAsync: deleteAsync} = useMutation(
    'delete movie',
    (movieId: string) => MovieService.delete(movieId),
    {
      onError: (error) => {
        toastError(error, 'Delete movie')
      },
      onSuccess: () => {
        toastr.success("Delete movie", 'delete was successful')
        queryData.refetch()
      }
    }
  )

  return useMemo(
    () => ({
      handleSearch,
      ...queryData,
      searchTerm,
      createAsync,
      deleteAsync,
    }),
    [queryData, searchTerm, createAsync, deleteAsync]
  )
}