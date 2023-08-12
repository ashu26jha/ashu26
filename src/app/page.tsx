import Image from 'next/image'
import Navbar from '../../components/Navbar'
export default function Home() {
  return (
    <div>

      <div className='main'>
        <Navbar />
        <div className='main-name'>
          Ashutosh Jha
        </div>

        <div className="wrapper">
          <ul className="dynamic-txts">
            <li><span>Blockchain Developer</span></li>
            <li><span>Open Source Contributor</span></li>
            <li><span>Frontend Developer</span></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
