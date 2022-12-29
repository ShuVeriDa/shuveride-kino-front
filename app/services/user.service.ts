import {getUsersUrl} from "@/config/api.config";
import {IUser} from "@/shared/types/user.types";
import {instance} from "../api/interceptors";
import {IProfileInput} from "@/screens/profile/profile.interface";

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

  async getProfile() {
    return instance.get<IUser>(getUsersUrl('/profile'))
  },
  async updateProfile(data: IProfileInput) {
    return instance.put<string>(getUsersUrl('/profile'), data)
  },
  async getById(_id: string) {
    return instance.get<IUser>(getUsersUrl(`/${_id}`))
  },
  async update(_id: string, data:IProfileInput) {
    return instance.put<string>(getUsersUrl(`/${_id}`), data)
  },
  async deleteUser(_id: string) {
    return instance.delete<string>(getUsersUrl(`/${_id}`))
  },

}