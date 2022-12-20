import {getActorsUrl, getGenresUrl, getMoviesUrl} from "@/config/api.config";
import {IActor} from "@/shared/types/movie.types";
import {axiosClassic, instance} from "../api/interceptors";
import {getActorUrl} from "@/config/url.config";
import {IGenreEditInput} from "@/screens/admin/genre/genre-edit.inteface";
import {IActorEditInput} from "@/screens/admin/actor/actor-edit.inteface";

export const ActorService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IActor[]>(getActorsUrl(``), {
      params: searchTerm
        ? {
          searchTerm,
        }
        : {},
    })
  },

  async getById(_id: string) {
    return instance.get<IActorEditInput>(getActorsUrl(`/${_id}`))
  },

  async create() {
    return instance.post<string>(getActorsUrl('/'))
  },

  async update(_id: string, data: IActorEditInput) {
    return instance.put<string>(getActorsUrl(`/${_id}`), data)
  },


  async delete(_id: string) {
    return instance.delete<string>(getActorsUrl(`/${_id}`))
  }
}