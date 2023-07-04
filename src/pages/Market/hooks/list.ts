import React from 'react'
import { Market } from '..'
import { GoodTypes } from 'types/good'

const useList = () => {
  const [allGoods, setAllGoods] = React.useState<GoodTypes.Card[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [page, setPage] = React.useState(3)
  const [perPage, setPerPage] = React.useState(12) // TODO rename to limit

  const getAll = React.useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await Market.API.List.getAll(page, perPage)

      setAllGoods(data)

    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
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
