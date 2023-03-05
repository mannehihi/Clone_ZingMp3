import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Slice() {

    const banner = useSelector(state => state.banner.banner)

    useEffect(()=>{
        const slideElement = document.getElementsByClassName('slider-item')
        let min = 0
        let max = 2
        const intervalId = setInterval(()=>{
            for(let i=0;i<slideElement.length;i++){
                if(i<=max && i>= min){
                    slideElement[i].style.cssText =`display: none`
                }else{
                    slideElement[i].style.cssText =`display: block`
                }
            }
            min +=1
            max +=1

        },1000)
        return ()=>{
            intervalId && clearInterval(intervalId)
        }
    },[])

  return (
    <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-[32px]'>
        {
            banner?.map(item=>(
                <img
                    src={item.banner}
                    className='slider-item flex-1 object-contain w-1/3 rounded-lg'
                />
            ))
        }
    </div>
  )
}

export default Slice