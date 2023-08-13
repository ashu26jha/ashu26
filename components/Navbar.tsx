import Image from 'next/image'

export default function Navbar(){
    
    return (
    
        <div className="navbar">


            <div className="projects">
                <a href='#'>Projects</a>
                
            </div>
            <div className="contact">
                <a href='#'>Contact</a>
            </div>

            <div className="icon">

                <a href='https://github.com/ashu26jha'>
                    <Image className='gitimg' src="/github.png" alt="me" width={10} height={10} />
                </a>

                <a href='https://www.linkedin.com/in/ashutosh-jha-6b57451b8/'>
                    <Image className='linkedinimg' src="/linkedin.png" alt="me" width={10} height={10} />
                </a>
                
            </div>
            
        </div>
    )
}
