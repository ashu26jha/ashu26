'use client';
import details from '../projects.js'
// import {Zoom} from 'react-reveal/Zoom';
export default function Projects() {

    return (
        <div >
            {details.map((T, U) => {
                return (
                    // <Zoom>
                    <div className='project-wrap'>
                        <div className="project">
                            
                            <div className="project-heading">
                                {T.name}
                            </div>

                            <div className="project-sub-heading">
                                {T.subheading}
                            </div>

                            <div className="project-desc">
                                {T.description}
                            </div>

                            <div className='project-tech'>
                                {T.techstack.map((E, K) => {
                                    return (
                                        <div className='tech'>
                                            {E}
                                        </div>
                                    )
                                })}
                            </div>

                            <div className='project-Github'>
                                <a href={T.github}> Github 🔗 </a>
                            </div>
                           

                        </div>
                        <div className='project-img'>
                            <img src ={T.image} />
                        </div>

                    </div>
                    // </Zoom>

                )
            })}

        </div>

    )
}
