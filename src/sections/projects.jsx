import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../components/projectCard'
import projects from '../data/projects'

const Projects = () => {

    return (
        <OuterWrapper>
                {projects.map((project) => {
                    return(
                        <ProjectCard project={project}/>
                    )
                })}

        </OuterWrapper>
    )
}

export default Projects

const OuterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    padding: 20px;
`