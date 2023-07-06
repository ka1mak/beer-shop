import React from 'react'
import { Market } from '..'
import Card from 'components/Card'
import PageTitle from 'components/PageTitle'
import CardSkeleton from 'components/Skeleton/Card'
import Pagination from 'components/Pagination'

export const List = () => {
  const {
    isLoading,
    allGoods,
  } = Market.Hooks.List.use()

  const loader = () => allGoods.map(({ id }) => <CardSkeleton key={id} />)

  return (
    <div className="min-h-screen">
      <PageTitle title="Список товаров" path="Market/" />

      <div className="flex flex-wrap justify-center p-1 tablet:p-4 laptop:px-10">
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
