'use client';
import details from '../projects.js'
import { Slide } from "react-awesome-reveal";
export default function Projects() {

    return (
        <div >
            {details.map((T, U) => {
                return (
                    <Slide direction='right' key={U}>
                        <div className='project-wrap' key={U}>
                            <div className="project" key={U}>

                                <div className="project-heading" key={U}>
                                    {T.name}
                                </div>

                                <div className="project-sub-heading" key={U}>
                                    {T.subheading}
                                </div>

                                <div className="project-desc" key={U}>
                                    {T.description}
                                </div>

                                <div className='project-tech' key={U}>
                                    {T.techstack.map((E, K) => {
                                        return (
                                            <div className='tech' key = {K}>
                                                {E}
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className='project-Github' key={U}>
                                    <a href={T.github}> Github 🔗 </a>
                                </div>


                            </div>
                            <div className='project-img' key={U}>
                                <img src={T.image} />
                            </div>
                        </div>
                    </Slide>
                )
            })}

        </div>

    )
}
