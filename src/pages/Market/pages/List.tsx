import React from 'react'
import { Market } from '..'
import {
  Card,
  Grid,
  PageTitle,
  Pagination,
  Skeleton,
} from 'components'

export const List = () => {
  const {
    isLoading,
    allGoods,
  } = Market.Hooks.List.use()

  return (
    <div className="min-h-screen">
      <PageTitle title="Список товаров" path="Market/" />

      <Grid>
        {
          isLoading
            ? [...new Array(30)].map((_, i) => <Skeleton key={i} />)
            : allGoods.map(good => <Card good={good} key={good.id} />)
        }
      </Grid>

      <Pagination />
    </div>
  )
}
