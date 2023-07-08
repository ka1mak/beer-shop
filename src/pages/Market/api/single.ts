import { axiosRequest } from 'config'

export const getSingle = (beer_name: string | undefined) => {
  return axiosRequest.get('/beers', {
    params: {
      beer_name
    }
  })
}

export const getAbvGreater = (abv_gt: number | undefined) => {
  return axiosRequest.get('/beers', {
    params: {
      abv_gt,
      per_page: 5,
    }
  }) 
}

export const getAbvMilder = (abv_lt: number) => {
  return axiosRequest.get('/beers', {
    params: {
      abv_lt,
      per_page: 5,
    }
  })
}
