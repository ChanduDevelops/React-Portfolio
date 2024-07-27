import PropTypes from 'prop-types'
import StackIcon from 'tech-stack-icons'
import { SiExpress } from 'react-icons/si'
import { FaLink } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";


const Project = ({ index, id, title, info, tech, image, liveLink, sourceLink }) => {
    return (
        <section id={id} className='project'>
            <div className={`container ${index % 2 === 0 ? 'reverse-flex' : ''}`}>
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
                    <div className='code-links'>
                        <a href={liveLink} target="_blank">
                            <span>
                                <MdDoubleArrow />
                            </span> Project live link <span>
                                <FaLink />
                            </span>
                        </a>
                        <a href={sourceLink} target="_blank">
                            <span>
                                <MdDoubleArrow />
                            </span> Source link <span>
                                <FaLink />
                            </span></a>
                    </div>
                </div>
                <div className='right'>
                    <h1 className="title">
                        {title}
                        <span></span>
                    </h1>
                    <div className="img-c">
                        <img src={image} alt="Project_Image" loading='lazy' />
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
    liveLink: PropTypes.string,
    sourceLink: PropTypes.string
}

export default Project
