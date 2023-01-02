import {getRatingsUrl, getUsersUrl} from "@/config/api.config";
import {IUser} from "@/shared/types/user.types";
import {instance} from "../api/interceptors";
import {IProfileInput} from "@/screens/profile/profile.interface";

export const RatingService = {

  async setRating(movieId: string, value: number) {
    return instance.put<string>(getRatingsUrl('/set-rating'), {movieId, value})
  },
  async getByUserMovie(movieId: string) {
    return instance.get<number>(getRatingsUrl(`/${movieId}`))
  },
}