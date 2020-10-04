import React from 'react'
import styled from 'styled-components'
import AboutInfo from '../components/about-me-info'
import Profile from '../components/profile'

const About = () => {
    return (
        <Wrapper>
            <Profile />
            <AboutInfo />
        </Wrapper>
    )
}

export default About

const Wrapper = styled.div`
    height: 60vh;
    padding: 50px;
    background-color: black;
    opacity: 0.95;
    display: flex;
    justify-content: space-between;
`