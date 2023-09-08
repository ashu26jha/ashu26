'use client';
import Image from 'next/image';
import { useEffect } from 'react';
export default function Desc() {
    const blur = () => {
        const JSimg = document.getElementById('jsimg');
        const Cimg = document.getElementById('cimg');
        const SOLimg = document.getElementById('solimg');
        const RUSTimg = document.getElementById('rustimg');

        let num = (window.scrollY/window.innerHeight)*20;
        JSimg!.style.webkitFilter = 'blur(' + num + 'px)'
        Cimg!.style.webkitFilter = 'blur(' + num + 'px)'
        SOLimg!.style.webkitFilter = 'blur(' + num + 'px)'
        RUSTimg!.style.webkitFilter = 'blur(' + num + 'px)'

    }

    useEffect(()=>{
        window.addEventListener("scroll", blur);
    },[])

    return (
        <>
            <div className='main-name'>
                <div className='Top'>
                    <Image id='solimg' src="/solidity.jpg" alt="me" width={100} height={100} />
                    <Image id='rustimg' src="/rust.jpg" alt="me" width={100} height={100} />

                </div>
                <div className='wrap'>
                    <Image id='jsimg' src="/js.jpg" alt="me" width={200} height={200} />
                    {/* <motion.div animate={{ y: 100 }} > */}
                        <div className='namebt'>Ashutosh Jha</div>
                    {/* </motion.div> */}
                    <Image id='cimg' src="/c.jpg" alt="me" width={100} height={100} />
                </div>

            </div>

            <div className="wrapper">
                <ul className="dynamic-txts">
                    <li><span>Blockchain Developer</span></li>
                    <li><span>Open Source Contributor</span></li>
                    <li><span>Frontend Developer</span></li>
                </ul>
            </div>
        </>
    )
}
