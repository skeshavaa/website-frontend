import React from 'react'
import styled from 'styled-components'
import AboutInfo from '../components/about-me-info'
import Profile from '../components/profile'
import { GithubOutlined } from '@ant-design/icons'

const About = () => {
    return (
        <Wrapper id="about">
            <Profile />
            <AboutInfo />
        </Wrapper>
    )
}

export default About

const Wrapper = styled.div`
    padding-bottom: 50px;
    padding: 50px;
    background-color: black;
    opacity: 0.95;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 70px;    
    @media (max-width: 760px) {
        flex-direction: column;
    }
`