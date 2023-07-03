import React from 'react'
import { Market } from '..'
import Card from 'components/Card'
import PageTitle from 'components/PageTitle'

export const List = () => {
  const {
    allGoods,
  } = Market.Hooks.List.use()

  return (
    <>
      <PageTitle title="Список товаров" />
      <div className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5 px-10 py-5">
        {allGoods.map(good => <Card good={good} key={good.id} />)}
      </div>
    </>
  )
}
