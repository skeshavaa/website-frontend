import React from 'react'
import styled from 'styled-components'

const AboutInfo = () => {
    return (
        <Wrapper>
            <Header>About Me</Header>
            <Divider />
        </Wrapper>
    )
}

export default AboutInfo

const Wrapper = styled.div`
    width: 50%;
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
`