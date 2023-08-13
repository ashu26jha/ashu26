'use client';
import details from '../projects.js'
import { Slide } from "react-awesome-reveal";
export default function Projects() {

    return (
        <div >
            {details.map((T, U) => {
                return (
                    <Slide direction='right'>
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
                    </Slide>
                )
            })}

        </div>

    )
}
