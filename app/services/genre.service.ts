import {getGenresUrl, getUsersUrl} from "@/config/api.config";
import {IGenre} from "@/shared/types/movie.types";
import {axiosClassic, instance} from "../api/interceptors";
import {getGenreUrl} from "@/config/url.config";
import {IGenreEditInput} from "@/screens/admin/genre/genre-edit.inteface";
import axios from "axios";

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
      params: searchTerm
        ? {
          searchTerm,
        }
        : {},
    })
  },

  async getById(_id: string) {
    return instance.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
  },
  async create() {
    return instance.post<string>(getGenresUrl(`/`))
  },
  async update(_id: string, data: IGenreEditInput) {
    return instance.put<string>(getGenresUrl(`/${_id}`), data)
  },

  async delete(_id: string) {
    return instance.delete<string>(getGenresUrl(`/${_id}`))
  }
}