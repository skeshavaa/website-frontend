import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../components/projectCard'
import projects from '../data/projects'

const Projects = () => {

    return (
        <OuterWrapper id="projects">
            <Heading>Projects</Heading>
                <ProjectWrapper>
                {projects.map((project) => {
                    return(
                        <ProjectCard project={project}/>
                    )
                })}
                </ProjectWrapper>
        </OuterWrapper>
    )
}

export default Projects

const OuterWrapper = styled.div`
    width: 100%;
    padding: 20px;
    padding-top: 70px;
    background-color: #1a1a1a;
`

const Heading = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: white;
    padding-left: 20px;
`

const ProjectWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: flex-start;
`