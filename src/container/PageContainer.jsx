import React from 'react'
import "./pageContainer.css"
export default function PageContainer({children}) {
  return (
    <div className='page-container w-20/21 m-auto'>  {children}</div>
  )
}