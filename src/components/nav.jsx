import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    
    return (
        <NavContainer>
            <Items>
                <Item href="#about">About</Item>
                <Item href="#skills">Skills</Item>
                <Item href="#experience">Experience</Item>
                <Item href="#projects">Projects</Item>
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
    position: sticky;
    top: 0;
    z-index: 5;
    @media (max-width: 490px) {
        justify-content: center;
        height: 50px;
    }
`

const Items = styled.div`
    display: flex;
`

const Item = styled.a`
    font-size: 15px;
    color: white;
    padding: 20px;
    font-family: "Montserrat", 'sans-serif';
    @media (max-width: 490px) {
        padding: 10px;
    }
`