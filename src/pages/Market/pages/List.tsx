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

      <div className="flex flex-wrap justify-center p-1 tablet:p-4 laptop:px-10">
        {
          isLoading
            ? loader()
            : allGoods.map(good => (
              <div
                key={good.id}
                className="flex-1 basis-[150px] tablet:basis-[220px] laptop:basis-[250px]"
              >
                <Card good={good} />
              </div>
            ))}
      </div>
    </>
  )
}
