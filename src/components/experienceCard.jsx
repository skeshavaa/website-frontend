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
            <ExperienceWrapper>
                <ImageWrapper>
                    <Image src={props.experience.image[0]} />
                    <DetailWrapper>
                        <Title>{props.experience.company}</Title>
                        <Description>{props.experience.title}</Description>
                        <Date>{props.experience.date}</Date>
                    </DetailWrapper>
                </ImageWrapper>
                <BulletWrapper>
                    {props.experience.bullets.map((bullet) => {
                        return(
                            <Li>{bullet}</Li>
                        )
                    })}
                </BulletWrapper>
                <TagsContainer>
                    {props.experience.tags.map((tag) => {
                        return(
                            <Tag>{tag}</Tag>
                        )
                    })}
                </TagsContainer>
            </ExperienceWrapper>
        </Card>
        </OuterWrapper>
    )
}

export default ExperienceCard

const OuterWrapper = styled.div`
    margin: 15px 20px 15px 20px; 
`

const ExperienceWrapper = styled.div`
    min-width: 200px;
    max-width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`

const ImageWrapper = styled.div`
    object-fit: fill;   
    min-width: 200px;
    max-width: 600px;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 485px) {
        flex-direction: column;
        justify-content: center;
    }
`

const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 200px;
    width: 100%;
`

const Image = styled.img`
    min-width: 100px;
    max-width: 200px;
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

const Date = styled.p`
    font-family: 'Montserrat';
    font-size: 15px;
    line-height: 25px;
    color: white;
`

const BulletWrapper = styled.div`
    padding: 15px;
`

const Li = styled.p`
    font-family: 'Montserrat';
    font-size: 15px;
    color: white;
    padding-bottom: 5px;
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
