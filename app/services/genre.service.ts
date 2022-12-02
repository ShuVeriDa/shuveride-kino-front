import {getGenresUrl, getUsersUrl} from "@/config/api.config";
import {IGenre} from "@/shared/types/movie.types";
import {axiosClassic, instance} from "../api/interceptors";
import {getGenreUrl} from "@/config/url.config";

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

  async deleteGenre(_id: string) {
    return instance.delete<string>(getGenreUrl(`/${_id}`))
  }
}