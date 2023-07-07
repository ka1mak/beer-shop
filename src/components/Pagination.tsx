import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { appSlice } from 'store/reducers/appSlice'

const Pagination: React.FC = () => {
  const currentPage = useAppSelector(state => state.appSlice.currentPage)
  const dispatch = useAppDispatch()
  const { setCurrentPage } = appSlice.actions
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  return (
    <div className="flex phone:p-3 tablet:justify-center">
      <div className="flex tablet:w-1/2 phone:w-full space-x-2">
        {pages.map(page => (
          <div
            key={page}
            className={`cursor-pointer flex-1 text-center rounded-md font-bold ${currentPage === page ? 'bg-slate-500 text-white' : ''}`}
            onClick={() => dispatch(setCurrentPage(page))}
          >{page}</div>
        ))}
      </div>
    </div>
  )
}

export default Pagination
