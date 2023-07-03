import React, { useCallback } from 'react'
import { IGood } from 'types/IGood'
import { Market } from '..'

const useList = () => {
  const [allGoods, setAllGoods] = React.useState<IGood[]>([]) 
  const [isLaoding, setIsLoading] = React.useState<boolean>(false)
  const [page, setPage] = React.useState<number>(3)
  const [perPage, setPerPage] = React.useState<number>(12)

  const getAll = useCallback(() => {
    const request = Market.API.List.getAll(page, perPage)

    setIsLoading(true)
    request
      .then(res => {
        const data = res.data

        setAllGoods(data)
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      })
  }, [page, perPage])

  React.useEffect(() => {
    getAll()
  }, [page, perPage, getAll])

  return {
    actions: {
      setPage,
      setPerPage,
    },
    isLaoding,
    allGoods,
  }
}

export const use = useList
