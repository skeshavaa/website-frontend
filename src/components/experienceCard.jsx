import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd' 
import {  ButtonGroup, IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import '../general.scss'


const ExperienceCard = (props) => {

    return (
        <OuterWrapper>
            <Card hoverable style={{padding: '0px'}} className="nopad">
            <ProjectWrapper>
                <ImageWrapper>
                    <Image src={props.experience.image[0]} />
                    <DetailWrapper>
                        <Title>Royal Bank of Canada</Title>
                        <Description>Backend Developer</Description>
                    </DetailWrapper>
                </ImageWrapper>
                
            </ProjectWrapper>
        </Card>
        </OuterWrapper>
    )
}

export default ExperienceCard

const OuterWrapper = styled.div`
    margin: 15px 20px 15px 20px; 
`

const ProjectWrapper = styled.div`
    min-width: 200px;
    max-width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const ImageWrapper = styled.div`
    object-fit: fill;   
    min-width: 200px;
    max-width: 600px;
    min-height: 100px;
    max-height: 200px;
    display: flex;
    justify-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Image = styled.img`
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 600px;
    object-fit: cover;  
    width: 100%;
`

const Title = styled.h1`
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: bolder;
    padding-top: 25px;
    color: white;
`

const Description = styled.p`
    font-family: 'Montserrat';
    font-size: 15px;
    padding-top: 15px;
    line-height: 25px;
    color: white;
`

const Container = styled.div`
    padding: 25px;
`

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
`

const Tag = styled.a`
    padding: 7px;
    margin: 10px 5px 5px 5px;
    background: #2e2e2e;
    border-radius: 5px;
    font-size: 15px;
    font-family: "Montserrat";
    color: white;
`
