import React from 'react'
import { Market } from '..'
import Card from 'components/Card'
import PageTitle from 'components/PageTitle'
import Skeleton from 'components/Skeleton'
import Pagination from 'components/Pagination'

export const List = () => {
  const {
    isLoading,
    allGoods,
  } = Market.Hooks.List.use()

  const loader = () => [...new Array(30)].map((_, i) => <Skeleton key={i} />)

  return (
    <div className="min-h-screen">
      <PageTitle title="Список товаров" path="Market/" />

      <div className="grid gap-2 py-2 phone:px-p1 tablet:px-2 phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5">
        {
          isLoading
            ? loader()
            : allGoods.map(good => <Card good={good} key={good.id} />)
        }
      </div>

      <Pagination />
    </div>
  )
}
