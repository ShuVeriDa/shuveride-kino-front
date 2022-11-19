import {getUsersUrl} from "@/config/api.config";
import {IUser} from "@/shared/types/user.types";
import {instance} from "../api/interceptors";

export const UserService = {
  async getAll(searchTerm?: string) {
    return instance.get<IUser[]>(getUsersUrl(''), {
      params: searchTerm
        ? {
          searchTerm,
        }
        : {},
    })
  },

  async deleteUser(_id: string) {
    return instance.delete<string>(getUsersUrl(`/${_id}`))
  }
}