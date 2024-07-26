import PropTypes from 'prop-types'
import StackIcon from 'tech-stack-icons'
import { SiExpress } from 'react-icons/si'
import { FaLink } from "react-icons/fa";


const Project = ({ index, id, title, info, tech, image, liveLink }) => {
    return (
        <section id={id} className='project'>
            <div className="container">
                <h1 className='counter'>{`0${index}`}</h1>

                <div className='left'>
                    <p>{info}</p>
                    <div className='tech-div'>
                        <span>Tech :</span>
                        <ul>{
                            tech.map((item, ind) => {
                                let icon = item.toLowerCase();
                                return (
                                    <li key={ind}>{
                                        icon === 'expressjs' ?
                                            <SiExpress className='express-icon' />
                                            : <StackIcon name={icon} />
                                    }
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <a href={liveLink} target="_blank">
                        Project live link <FaLink />
                    </a>
                </div>
                <div className='right'>
                    <h1 className="title">
                        {title}
                        <span></span>
                    </h1>
                    <div className="img-c">
                        <img src={image} alt="" loading='lazy' />
                    </div>
                </div>
            </div>
        </section>
    )
}

Project.propTypes = {
    index: PropTypes.number,
    id: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    tech: PropTypes.array,
    image: PropTypes.string,
    liveLink: PropTypes.string
}

export default Project
