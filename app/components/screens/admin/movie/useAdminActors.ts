import {useQuery} from "react-query";
import {toastError} from "@/utils/toastError";
import {IOption} from "@/ui/select/select.interface";
import {ActorService} from "@/services/actor.service";

export const useAdminActors = () => {
  const queryData = useQuery(
    'List of actor',
    () => ActorService.getAll(), {
      select: ({data}) =>
        data.map(
          (actor): IOption => ({
            label: actor.name,
            value: actor._id
          })
        ),

      onError: (error) => {
        toastError(error, 'Actor list')
      }
    }
  )

  return queryData
}