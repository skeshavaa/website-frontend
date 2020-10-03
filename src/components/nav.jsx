import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <NavContainer>
            <Items>
                <Item>About Me</Item>
                <Item>Skills</Item>
                <Item>Experience</Item>
                <Item>Contact</Item>
            </Items>
        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.div`
    display: flex;
    height: 70px;
    color: white;
    background-color: black;
    width: 100vw;
    justify-content: flex-end;
    align-content: center;
`

const Items = styled.div`
    display: flex;
`

const Item = styled.h1`
    font-size: 25px;
    color: white;
    padding: 10px 10px 10px 10px;
    font-weight: bold;
`