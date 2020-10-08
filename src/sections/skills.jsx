import React from 'react'
import styled from 'styled-components'
import SkillCard from '../components/skillsCard'
import frontEnd from '../data/frontend.js'
import backEnd from '../data/backend.js'
import languages from '../data/language.js'
import tools from '../data/Tools.js'

function Skills() {
    return (
        <Wrapper id="skills">
            <Heading>Frontend</Heading>
            <Row>
            {frontEnd.map((skill) => {
                return(
                    <SkillCard skill={skill}/>
                )
            })}
            </Row>
            <Heading>Backend</Heading>
            <Row>
            {backEnd.map((skill) => {
                return(
                    <SkillCard skill={skill}/>
                )
            })}
            </Row>
            <Heading>Languages</Heading>
            <Row>
            {languages.map((skill) => {
                return(
                    <SkillCard skill={skill}/>
                )
            })}
            </Row>
            <Heading>Tools</Heading>
            <Row>
            {tools.map((skill) => {
                return(
                    <SkillCard skill={skill}/>
                )
            })}
            </Row>
        </Wrapper>
    )
}

export default Skills


const Wrapper = styled.div`
    background: #131313;
    padding: 25px;
    padding-top: 70px;
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Heading = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: white;
    padding-left: 20px;
`
