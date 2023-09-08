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

                                {T.prize.length>0 ? <>{T.prize.map((R, X) => {
                                        return (
                                            <div className='prize' key = {X}>
                                                {R}
                                            </div>
                                        )
                                    })}</> : <>LMAO</>}


                            </div>
                                <div className='project-img' key={U}>
                                    <a href={T.link} target="_blank">
                                    <div className='helper-img'>
                                    <img src={T.image} />
                                    </div>
                                    
                                    </a>
                                </div>
    
                        </div>
                    </Slide>
                )
            })}

        </div>

    )
}
