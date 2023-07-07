import React from 'react'
import { GoodTypes } from 'types/good'
import { Market } from '..'
import { useParams } from 'react-router-dom'

const useSingle = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [goods, setGoods] = React.useState<GoodTypes.Card>()
  const { beer_name } = useParams()

  const getSingle = React.useCallback(async (beer_name: string | undefined) => {
    setIsLoading(true)

    try {
      const { data } = await Market.API.Single.getSingle(beer_name)

      setGoods(data[0])
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }, [])


  React.useEffect(() => {
    getSingle(beer_name)
  }, [beer_name, getSingle])

  return {
    isLoading,
    goods,
  }
}

export const use = useSingle
