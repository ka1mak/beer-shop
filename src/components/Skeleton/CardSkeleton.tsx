import React from 'react'
import ContentLoader from "react-content-loader"

const CardSkeleton: React.FC = (props) => {
  return (
    <div className="card-shadow rounded-lg">
      <ContentLoader
        speed={2}
        width="100%"
        height={346}
        viewBox="0 0 100% 100%"
        backgroundColor="#d6d6d6"
        foregroundColor="#ffffff"
        opacity="0.2"
        {...props}
      >
        <rect x="0" y="00" rx="10" ry="10" className="w-full h-full" />
      </ContentLoader>
    </div>
  )
}

export default CardSkeleton
