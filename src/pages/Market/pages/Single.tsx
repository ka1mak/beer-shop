import React from 'react'
import { Market } from '..'
import { PageTitle } from 'components'
import { useNavigate } from 'react-router-dom'

export const Single = () => {
  const navigate = useNavigate()
  const { goods, isLoading } = Market.Hooks.Single.use()

  const goCalatog = () => navigate('/market')

  if (isLoading || !goods) return <h1>Loading...</h1>
  return (
    <div className="min-h-screen">
      <PageTitle
        title={goods.name}
        path={`Каталог / ${goods.name}`}
        withBack
        onBack={goCalatog}
      />

      <div className="flex flex-wrap py-4 phone:px-1 tablet:px-3 laptop:px-10">
        <div className="basis-32 flex-1 flex justify-center">
          <img
            src={goods.image_url}
            alt={goods.name}
            className="h-96"
          />
        </div>
        <div className="basis-96 grow-[3] py-3 px-5 space-y-2">
          <div className="space-x-2 text-sm">
            <span className="text-red-500 font-medium">Tag:</span>
            <span>{goods.tagline}</span>
          </div>

          <div className="text-2xl font-semibold tracking-wide underline">{goods.name}</div>

          <div className="space-x-2">
            <span className="text-red-500 font-medium">Крепость:</span>
            <span>{goods.abv}%</span>
          </div>

          <div className="space-x-2 text-sm">
            <span className="text-red-500 font-medium">Description:</span>
            <span>{goods.description}</span>
          </div>

          <div className="text-red-500 underline font-medium">
            {goods.volume.value} {goods.volume.unit}
          </div>
        </div>
      </div>
    </div>
  )
}
