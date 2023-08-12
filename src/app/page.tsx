import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Desc from '../../components/Desc'
import React, { useEffect } from "react"

export default function Home() {

  return (
    <div>

      <div className='main'>
        <Navbar />
        <Desc/>
      </div>
    </div>
  )
}
