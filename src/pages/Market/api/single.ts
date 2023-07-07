import { axiosRequest } from 'config'

export const getSingle = (beer_name: string | undefined) => {
  return axiosRequest.get('/beers', {
    params: {
      beer_name
    }
  })
}
