import Navbar from '../../components/Navbar'
import Desc from '../../components/Desc'
import Projects from '../../components/Projects'
import React, { useEffect } from "react"

export default function Home() {

  return (
    <div>

      <div className='main'>
        <Navbar />

        <Desc />
        <Projects />
      </div>
    </div>
  )
}
