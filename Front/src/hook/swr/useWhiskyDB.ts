import { AxiosResponse } from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import useSWR from 'swr'
import { client } from '../../api/client'
import { WhiskyInfoProp } from '../../model/Whisky'

function useWhiskyDB() {
  const whisky_id = useParams()

  console.log('whis',whisky_id);

  const {data, error} = useSWR(`/api/whisky/${whisky_id['id']}/`, async(url) => {
    const detail = await client.get(url).then((res: AxiosResponse<WhiskyInfoProp> )=> res.data)
    return detail
  } )


  return {
    data,
    error,
    isLoading: !data && !error
  }
}

export default useWhiskyDB
