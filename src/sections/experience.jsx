import React from 'react'
import styled from 'styled-components'
import ExperienceCard from '../components/experienceCard'
import experience from '../data/experience'

const Experience = () => {

    return (
        <OuterWrapper id="experience">
            <Heading>Experience</Heading>
            <ExperienceWrapper>
            {experience.map((exp) => {
                return(
                    <ExperienceCard experience={exp}/>
                )
            })}
            </ExperienceWrapper>
        </OuterWrapper>
    )
}

export default Experience

const OuterWrapper = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #131313;
    padding-top: 70px;
`

const Heading = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: white;
    padding-left: 20px;
`

const ExperienceWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: flex-start;
`