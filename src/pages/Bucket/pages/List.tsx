import React from 'react'
import { Bucket } from '..'

import CardSkeleton from 'components/Skeleton/Card'
import PageTitle from 'components/PageTitle'
import Card from 'components/Card'

export const List = () => {
  const { goods, isLoading } = Bucket.Hooks.List.use()

  const loader = () => goods.map(({ id }) => <CardSkeleton key={id} />)
  console.log(goods)

  return (
    <div className="min-h-screen">
      <PageTitle title="Корзина" path="Bucket /" />

      <div className="flex flex-wrap justify-center p-1 tablet:p-4 laptop:px-10">
        {
          isLoading
            ? loader()
            : goods.map(good => <Card good={good} key={good.id} />)
        }
      </div>
    </div>
  )
}
