import React from 'react'
import styled from 'styled-components'

const Landing = () => {
    return (
        <Wrapper>
            <HeadingOne>Hello I'm</HeadingOne>
            <HeadingTwo>KESHAVAA</HeadingTwo>
        </Wrapper>
    )
}

export default Landing

const Wrapper = styled.div`
    height: 50vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;
    width: 100%;
    @media (max-width: 490px) {
        padding-left: 20px;
    }
`

const HeadingOne = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    color: white;
    font-size: 50px;
    margin: 0;
`

const HeadingTwo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: white;
    font-size: 50px;
`