import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { appSlice } from 'store/reducers/appSlice'
import { GoodTypes } from 'types/good'
import { BsCartPlus, BsStarFill, BsStarHalf, BsCartXFill } from 'react-icons/bs'

interface Props {
  good: GoodTypes.Card
}

const Card: React.FC<Props> = ({ good }) => {
  const { addToBucket, removeFromBucket } = appSlice.actions
  const dispatch = useAppDispatch()
  const bucket = useAppSelector((state) => state.appSlice.bucket)
  const { name, image_url, id } = good

  const [goodInBucket, setGoodInBucket] = React.useState(() => bucket.includes(id))

  React.useEffect(() => {
    setGoodInBucket(bucket.includes(id))
  }, [bucket, id])

  const handleAddToBucket = () => {
    dispatch(addToBucket(id))
  }

  const handleRemoveFromBucket = () => {
    dispatch(removeFromBucket(id))
  }

  const price = React.useMemo(() => (Math.random() * 3).toFixed(2), [])
  const rating = React.useMemo(() => Math.floor(Math.random() * (1000 - 100) + 100), [])

  return (
    <div className="">
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
            <span className="text-orange-400 font-bold phone:text-sm tablet:text-lg">${price}</span>
            <del className="phone:text-[11px] tablet:text-sm ml-1">$4.52</del>
            <div className="ml-auto phone:text-xl tablet:text-2xl">
              {goodInBucket ? (
                <button onClick={handleRemoveFromBucket}>
                  <BsCartXFill />
                </button>
              ) : (
                <button onClick={handleAddToBucket}>
                  <BsCartPlus />
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center phone:text-sm tablet:text-base laptop:text-sm">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <span className="ml-1">
              0.{rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
