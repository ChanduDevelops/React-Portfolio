import PropTypes from 'prop-types'

const Project = ({ id }) => {
    return (
        <section id={id} className='project' >
            {id}
        </section>
    )
}

Project.propTypes = {
    id: PropTypes.string,
    project: PropTypes.string
}

export default Project
