import React from 'react'
import { Market } from '..'
import { GoodTypes } from 'types/good'

const useList = () => {
  const [allGoods, setAllGoods] = React.useState<GoodTypes.Card[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [page, setPage] = React.useState(3)
  const [perPage, setPerPage] = React.useState(10) // параметром perPage заменен limit на бэке  

  const getAll = React.useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await Market.API.List.getAll(page, perPage)

      setAllGoods(data)

    } catch (e) {
      console.log(e)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000) // дана секунда для подгрузки картинок
    }
  }, [page, perPage])

  React.useEffect(() => {
    getAll()
  }, [page, perPage, getAll])

  return {
    actions: {
      setPage,
      setPerPage,
    },
    isLoading,
    allGoods,
  }
}

export const use = useList
