import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd' 
import {  ButtonGroup, IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import '../general.scss'


const ProjectCard = (props) => {

    return (
        <OuterWrapper>
            <Card hoverable style={{padding: '0px'}} className="nopadd">
            <ProjectWrapper>
                <ImageWrapper>
                    <Image src={props.project.image[0]} />
                </ImageWrapper>
                <Container>
                    <Title>{props.project.name}</Title>
                    <Description>{props.project.desc}</Description>
                </Container>
                <TagsContainer>
                    {props.project.tags.map((tag) => {
                        return (
                            <Tag>{tag}</Tag>
                        )
                    })}
                </TagsContainer>
                <ButtonContainer>
                    <ButtonGroup variant="outlined">
                        <IconButton href={props.project.code} target="_blank" variant="outlined"><GitHubIcon color={'white'}/></IconButton>
                        <IconButton href={props.project.project} target="_blank" variant="outlined"><LaunchIcon /></IconButton>
                    </ButtonGroup>
                </ButtonContainer>
            </ProjectWrapper>
        </Card>
        </OuterWrapper>
    )
}

export default ProjectCard

// const Card = styled.div`
//     border: 2px solid lightgrey;
//     border-radius: 10px;
// `

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
`

const Image = styled.img`
    min-width: 200px;
    max-width: 600px;
    min-height: 100px;
    max-height: 200px;
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

const ButtonContainer = styled.div`
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 25px;
    padding-top: 25px;
`