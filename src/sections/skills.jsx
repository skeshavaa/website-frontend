import React from 'react'
import styled from 'styled-components'
import SkillCard from '../components/skillsCard'
import frontEnd from '../data/frontend.js'

function Skills() {
    return (
        <Wrapper>
            <Row>
            {frontEnd.map((skill) => {
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
    height: 60vh;
    background: #131313;
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`
