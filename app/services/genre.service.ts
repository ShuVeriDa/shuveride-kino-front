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
    return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
  },


  async update(_id: string, data: IGenreEditInput) {
    return instance.put<string>(getGenreUrl(`/${_id}`), data)
  },

  async delete(_id: string) {
    return instance.delete<string>(getGenreUrl(`/${_id}`))
  }
}