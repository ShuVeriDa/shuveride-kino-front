import {getActorsUrl} from "@/config/api.config";
import {IActor} from "@/shared/types/movie.types";
import {axiosClassic, instance} from "../api/interceptors";
import {getActorUrl} from "@/config/url.config";

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

  async deleteActor(_id: string) {
    return instance.delete<string>(getActorUrl(`/${_id}`))
  }
}