import React from 'react'
import { Market } from '..'
import Card from 'components/Card'
import PageTitle from 'components/PageTitle'
import CardSkeleton from 'components/Skeleton/Card'

export const List = () => {
  const {
    isLoading,
    allGoods,
  } = Market.Hooks.List.use()

  const loader = () => allGoods.map(() => <CardSkeleton />)

  return (
    <>
      <PageTitle title="Список товаров" />

      <div className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5 px-10 py-5">
        {
          isLoading
          ? loader()
          : allGoods.map(good => <Card good={good} key={good.id} /> )}
      </div>
    </>
  )
}
