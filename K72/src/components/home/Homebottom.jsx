import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  const [montrealTime, setMontrealTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const time = now.toLocaleTimeString('en-CA', {
        timeZone: 'America/Montreal',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setMontrealTime(time)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <p className='absolute lg:w-[22vw] w-72 lg:right-15 right-0 bottom-28 lg:bottom-60 font-[font1] text-[1rem] lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
      </p>
      <div className='absolute left-2 bottom-7 h-[2vh] w-[20vw] text-3xl'>
  MONTREAL_ <span>{montrealTime}</span>
</div>

      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center px-3 pt-1 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-2' to='/projects'>work</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center px-3 pt-1 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-2' to='/agence'>agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
