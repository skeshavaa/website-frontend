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
    max-width: 140px;
    min-width: 100px;
    background-color: #262424;
    margin: 20px;
    @media (max-width: 420px) {
        margin: 10px;
    }
    @media (max-width: 370px) {
        width: 100px;
    }
`

const Image = styled.img`
    width: 120px;
    height: 120px;
    margin: 10px;
    @media (max-width: 370px) {
        width: 90px;
        height: 90px;
    }
`

const Heading = styled.h1`
    font-family: 'Montserrat';
    font-size: 20px;
    color: white;
    font-weight: lighter;
    text-align: center;
`

const Sub = styled.h1`
    font-family: 'Montserrat';
    font-size: 15px;
    color: white;
    font-weight: lighter;
    text-align: center;
`