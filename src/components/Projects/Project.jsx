import PropTypes from 'prop-types'

const Project = ({ id, counter, projectTitle }) => {
    return (
        <section id={id} className='project'>
            <div className="container">
                <h1 className="title">{projectTitle}</h1>
                <div className="img-c">
                    <img src="" alt="" />
                </div>
                <h1 className='counter'>{`0${counter}`}</h1>
            </div>
        </section>
    )
}

Project.propTypes = {
    id: PropTypes.string,
    counter: PropTypes.number,
    projectTitle: PropTypes.string
}

export default Project
