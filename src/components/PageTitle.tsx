import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'

interface PageTitleTypes {
  title: string
  withBack?: boolean
  onBack?: () => void
  BackContent?: (props: React.ComponentProps<'svg'>) => JSX.Element
}

const PageTitle: React.FC<PageTitleTypes> = ({
  title,
  BackContent = BsArrowLeftCircle,
  onBack,
  withBack,
}) => {
  return (
    <div className="flex items-center justify-between border-b phone:mx-5 laptop:mx-10 mt-3 px-4 py-2">
      <div className="flex items-center text-xl space-x-3">
        {withBack && (
          <BackContent
            className="text-3xl cursor-pointer"
            onClick={onBack}
          />
        )}
        <div>{title}</div>
      </div>
      <div>
        <input
          type="text"
          className="hidden tablet:inline bg-black/10 rounded-md px-3 py-1 outline-none border"
          placeholder="Искать"
        />
      </div>
    </div>
  )
}

export default PageTitle
