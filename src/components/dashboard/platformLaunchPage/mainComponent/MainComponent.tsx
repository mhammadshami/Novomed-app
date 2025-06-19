import React from 'react'
import BoardColumnComponent from './boardColumnComponent/BoardColumnComponent'

const MainComponent = () => {
  return (
    <div className='flex gap-6 p-6'>
      <BoardColumnComponent />
      <BoardColumnComponent />
      <BoardColumnComponent />
    </div>
  )
}

export default MainComponent