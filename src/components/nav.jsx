import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    
    return (
        <NavContainer>
            <Items>
                <Item>About</Item>
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
    width: 100%;
    justify-content: flex-end;
    align-content: center;
    @import "wealthsimple-fabric/scss/fabric";
`

const Items = styled.div`
    display: flex;
`

const Item = styled.h1`
    font-size: 15px;
    color: white;
    padding: 20px 20px 20px 10px;
    font-family: "Montserrat", 'sans-serif';
`