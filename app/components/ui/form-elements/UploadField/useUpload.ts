import {ChangeEvent, useCallback, useMemo, useState} from "react";
import {useMutation} from "react-query";
import {FileService} from "@/services/file.service";
import {toastError} from "@/utils/toastError";

type TypeUpload = (onChange: (...event: any[]) => void, folder?: string) => {
  uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>,
  isLoading: boolean
}
export const useUpload: TypeUpload = (onChange, folder) => {
  const [isLoading, setLoading] = useState(false)

  const {mutateAsync} = useMutation(
    'upload file',
    (data: FormData) => FileService.upload(data, folder),
    {
      onSuccess: ({data}) => {
        onChange(data[0].url)
      },
      onError: (error) => {
        toastError(error, 'Upload file')
      }
    })

  const uploadFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)

    const files = e.target.files
    if (!files?.length) return

    const formData = new FormData()
    formData.append('file', files[0])

    await mutateAsync(formData)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [mutateAsync])

  return useMemo(() => ({
    uploadFile: uploadFile, isLoading
  }), [uploadFile, isLoading])
}