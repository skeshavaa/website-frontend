import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd'

const SkillCard = ({ skill }) => {

    return (
        <Wrapper>
            <Image src={skill.logo}/>
            <Heading>{skill.name}</Heading>
            <Sub>{skill.sub}</Sub>
        </Wrapper>
    )
}

export default SkillCard

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    background-color: #262424;
    margin: 20px;
`

const Image = styled.img`
    width: 120px;
    height: 120px;
    margin: 10px;
`

const Heading = styled.h1`
    font-family: 'Montserrat';
    font-size: 20px;
    color: white;
    font-weight: lighter;
`

const Sub = styled.h1`
    font-family: 'Montserrat';
    font-size: 15px;
    color: white;
    font-weight: lighter;
`