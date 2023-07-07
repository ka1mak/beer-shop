import React from 'react'
import { useAppSelector } from 'hooks/redux'

import { Bucket } from '..'

import {
  Skeleton,
  PageTitle,
  Grid,
  Card,
} from 'components'

export const List = () => {
  const { goods, isLoading } = Bucket.Hooks.List.use()
  const bucket = useAppSelector(state => state.appSlice.bucket)

  const loader = () => [...new Array(bucket.length)].map((_, i) => <Skeleton key={i} />)

  return (
    <div className="min-h-screen">
      <PageTitle title="Корзина" path="Bucket /" />

      <Grid>
        {
          isLoading
            ? loader()
            : goods.map(good => <Card good={good} key={good.id} />)
        }
      </Grid>
    </div>
  )
}
