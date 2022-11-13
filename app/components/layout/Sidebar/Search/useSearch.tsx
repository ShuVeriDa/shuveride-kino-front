import {ChangeEvent, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {useQuery} from "react-query";
import {MovieService} from "@/services/movie.service";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const {isSuccess, data} = useQuery(
    ['search movie list', debouncedSearch],
    () => MovieService.getAll(debouncedSearch), {
      select: ({data}) => data,
      enabled: !!debouncedSearch
    }
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value)
  }

  console.log(data)

  return {isSuccess, handleSearch, data, searchTerm}
}