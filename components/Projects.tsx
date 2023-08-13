'use client';
import details from '../projects.js'

export default function Projects() {

    return (
        <div>
            {details.map((T, U) => {
                return (
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

                        <div className='project-tech'></div>
                        {T.techstack.map((E, K) => {
                            return (
                                <div className='tech'>
                                    {E}
                                </div>
                            )
                        })}

                    </div>
                )
            })}

        </div>

    )
}
