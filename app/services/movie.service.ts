import {axiosClassic, instance} from "../api/interceptors";
import {IGenre, IMovie} from "@/shared/types/movie.types";
import {getGenresUrl, getMoviesUrl, getUsersUrl} from "@/config/api.config";
import {getMovieUrl} from "@/config/url.config";

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm
        ? {
          searchTerm,
        }
        : {},
    })
  },

  async getPopularMovies() {
    const {data: movies} = await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))

    return movies
  },

  async deleteMovie(_id: string) {
    return instance.delete<string>(getMovieUrl(`/${_id}`))
  }
}