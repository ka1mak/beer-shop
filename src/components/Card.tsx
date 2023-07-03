import React from 'react'
import { IGood } from 'types/IGood'
import { BsCartPlus, BsCartCheck } from 'react-icons/bs'

interface CardType {
  good: IGood
}

const Card = ({ good }: CardType) => {
  const { name, image_url, description } = good
  const [inBucket, setInBucket] = React.useState<boolean>(false)

  const toggleBucket = () => {
    setInBucket(!inBucket)
  }

  return (
    <div className="bg-white/20 card-shadow flex flex-col">
      <div className="basis-14 border-b flex items-center px-3 text-ellipsis overflow-hidden">
        <div className="tracking-wider font-semibold">{name}</div>
      </div>
      <div className="p-3 flex h-60">
        <img src={image_url} alt={name} className="basis-32 h-48 object-contain" />
        <div className="w-full h-full text-base overflow-hidden pl-2">
          <div
            className="h-full overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 9,
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </div>
        </div>
      </div>
      <div className="px-3 py-3 flex justify-end space-x-2">
        <button className="text-2xl px-3 py-px rounded-md" onClick={toggleBucket}>
          {inBucket ? <BsCartCheck /> : <BsCartPlus />}
        </button>
        <button className="underline px-3 py-px rounded-md" onClick={toggleBucket}>Подбронее</button>
      </div>
    </div>
  )
}

export default Card
