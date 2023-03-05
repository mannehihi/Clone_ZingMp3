import React, { useEffect } from 'react'
import { Header } from '../../component'
import Slice from '../../component/Slice'

const Home = () => {

  return (
    <div className='overflow-y-auto'>
      <div className='h-[70px] px-[59px] flex items-center'>
        <Header/>
      </div>
        <Slice/>
    </div>
  )
}

export default Home