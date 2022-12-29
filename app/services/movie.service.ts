import {axiosClassic, instance} from "../api/interceptors";
import {IGenre, IMovie} from "@/shared/types/movie.types";
import {getActorsUrl, getGenresUrl, getMoviesUrl, getUsersUrl} from "@/config/api.config";
import {getMovieUrl} from "@/config/url.config";
import {IActorEditInput} from "@/screens/admin/actor/actor-edit.inteface";
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
      genreIds
    })
  },

  async getByActor(actorId: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
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
  }
}