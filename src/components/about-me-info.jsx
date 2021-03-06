import React from 'react'
import styled from 'styled-components'
import Icons from './icons'

const AboutInfo = () => {
    return (
        <Wrapper>
            <Header>About Me</Header>
            <Divider />
            <Info>
                Hey. I'm a second year <InfoHighlight>Computer Science </InfoHighlight>
                student at the <InfoHighlight>University of Toronto</InfoHighlight>
                <br/><br/>
                <InfoHighlight>I like making things. </InfoHighlight>Whether it's a web 
                application or mobile app, <InfoHighlight> I'm gonna do it.</InfoHighlight>
                <br/><br/>
                <InfoHighlight>Check out my work below!</InfoHighlight>
                <br/><br/>
                <InfoHighlight>PS: Recruiters HIT ME UP :)</InfoHighlight>
            </Info>
            <Icons />
        </Wrapper>
    )
}

export default AboutInfo

const Wrapper = styled.div`
    height: auto;
    @media (max-width: 1070px) {
        margin-top: 20px;
        width: 100%;
    }
`

const Header = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    color: white;
`

const Divider = styled.div`
    height: 3px;
    width: 40px;
    background-color: white;
    margin-bottom: 20px;
`

const Info = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    color: white;
    font-weight: lighter;
`

const InfoHighlight = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    color: white;
    font-weight: bold;
`