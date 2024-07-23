import PropTypes from 'prop-types'

const Project = ({ id, project }) => {
    return (
        <section id={id} className='project' onClick={() => { console.log(project); }}>
            {project}
        </section>
    )
}

Project.propTypes = {
    id: PropTypes.string,
    project: PropTypes.string
}

export default Project
