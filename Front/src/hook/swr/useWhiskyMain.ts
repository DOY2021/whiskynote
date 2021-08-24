import { AxiosResponse } from "axios"
import useSWR from "swr"
import { client } from "../../api/client"
import { WhiskyMainProps } from "../../api/whisky"

interface UseWhiskyMainProp {
  search?: string;
  ordering?: Ordering;
  page: number;
}

export enum Ordering  {
  UPDATED_AT = 'updated_at',
  RATING_COUNTS = 'rating_counts',
  WHISKY_RATINGS = 'whisky_ratings',
}

function useWhiskyMain({
  search = '',
  ordering = Ordering.UPDATED_AT,
  page = 1,
}:UseWhiskyMainProp) {
  const {data, error} = useSWR(['/api/whisky/main',ordering,page,search], async(url,search,ordering,page)=> {
    const whiskyList : AxiosResponse<WhiskyMainProps> = await client.get(url, {
      params: {
        search,
        ordering,
        page
      }
    })
    return whiskyList.data
  }) 
  return ({
    data,
    error,
    isLoading: !data && !error,
  })
}

export default useWhiskyMain
