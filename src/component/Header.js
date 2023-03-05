import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Search from './Search'

const Header = () => {
  return (
    <div className='flex justify-between w-full items-center'>
      <div className='flex gap-6 w-full items-center'  >
          <div className='flex gap-6'>
            <span><AiOutlineArrowLeft size={24}/></span>
            <span><AiOutlineArrowRight size={24}/></span>
          </div>
          <div className='w-1/2'>
            <Search/>
          </div>
      </div>
      
      <div>
        đăng nhập
      </div>
    </div>
  )
}

export default Header