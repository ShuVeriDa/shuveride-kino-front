import {axiosClassic, instance} from "../api/interceptors";
import {IMovie} from "@/shared/types/movie.types";
import {getMoviesUrl} from "@/config/api.config";
import {IMovieEditInput} from "@/screens/admin/movie/movie-edit.inteface";

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

  async getById(_id: string) {
    return instance.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
  },

  async getByGenres(genreIds: string[]) {
    return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
      genreIds,
    })
  },

  async getByActor(actorId: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
  },

  async getBySlug(slug: string) {
    return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
  },

  async create() {
    return instance.post<string>(getMoviesUrl('/'))
  },

  async update(_id: string, data: IMovieEditInput) {
    return instance.put<string>(getMoviesUrl(`/${_id}`), data)
  },

  async getMostPopularMovies() {
    const {data: movies} = await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))
    return movies
  },

  async delete(_id: string) {
    return instance.delete<string>(getMoviesUrl(`/${_id}`))
  },

  async updateCountOpened(slug: string) {
    return axiosClassic.put<string>(getMoviesUrl(`/update-count-opened`),
      {slug})
  }
}