import React from 'react'
import styled from 'styled-components'
import Keshavaa from '../images/me.png'

const Profile = () => {
    return (
        <Outer>
            <Inner />
            <Test>
                <Image src={Keshavaa}/>
            </Test>
        </Outer>
    )
}

export default Profile

const Outer = styled.div`
    width: 300px;
    height: 350px;
`


const Inner = styled.div`
    position: absolute;
    height: 330px;
    width: 250px;
    border: 5px solid white;
    bottom: 10px;
    left: 25px;
`

const Image = styled.img`
    width: 250px;
    height: auto;
`

const Test = styled.div`
    position: absolute;
    z-index: 2;
`