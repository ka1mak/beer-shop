import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { appSlice } from 'store/reducers/appSlice'
import { GoodTypes } from 'types/good'

import { BsCartPlus, BsStarFill, BsStarHalf, BsCartXFill } from 'react-icons/bs'

interface Props {
  good: GoodTypes.Card
}

const Card = ({
  good
}: Props) => {
  const [goodInBucket, setGoodInBuket] = React.useState(false)
  const dispatch = useAppDispatch()
  const bucket = useAppSelector(state => state.appSlice.bucket)
  const { addToBucket, removeFromBucket } = appSlice.actions
  const { name, image_url, id } = good

  React.useEffect(() => {
    if (bucket.includes(id)) {
      setGoodInBuket(true)
    } else {
      setGoodInBuket(false)
    }
  }, [bucket, id])

  return (
    <div className="mb-2 mx-1">
      <div className="bg-slate-50 p-2 rounded-md">
        <div className="bg-white rounded-md p-2">
          <img
            className="w-full h-48 object-contain"
            src={image_url}
            alt={name}
          />
        </div>
        <div className="p-1 tablet:p-2 laptop:px-3">
          <div className="truncate w-[120px] tablet:w-[220px] laptop:w-[200px] text-sm font-semibold">{name}</div>
          <div className="flex items-center mt-1">
            <span className="text-orange-400 font-bold phone:text-sm tablet:text-lg">${(Math.random() * 3).toFixed(2)}</span>
            <del className="phone:text-[11px] tablet:text-sm ml-1">$4.52</del>
            <div className="ml-auto phone:text-xl tablet:text-2xl">
              {
                goodInBucket
                  ? <button onClick={() => dispatch(removeFromBucket(id))}><BsCartXFill /></button>
                  : <button onClick={() => dispatch(addToBucket(id))}><BsCartPlus /></button>
              }
            </div>
          </div>
          <div className="flex items-center phone:text-sm tablet:text-base laptop:text-sm">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <span className="ml-1">
              {Math.floor(Math.random() * 3)},{Math.floor(Math.random() * (1000 - 100) + 100)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
