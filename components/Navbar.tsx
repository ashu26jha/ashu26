import Image from 'next/image'

export default function Navbar(){
    
    return (
    
        <div className="navbar">


            <div className="singnature">
                <img src='/image.png'/>
                
            </div>

            <div className="icon">

                <a href='https://github.com/ashu26jha'>
                    <Image className='gitimg' src="/github.jpg" alt="me" width={10} height={10} />
                </a>

                <a href='https://www.linkedin.com/in/ashutosh-jha-6b57451b8/'>
                    <Image className='linkedinimg' src="/linkedin.jpg" alt="me" width={10} height={10} />
                </a>
                
            </div>
            
        </div>
    )
}
