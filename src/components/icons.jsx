import React from 'react'
import styled from 'styled-components'
import { 
    GithubOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    DownloadOutlined,
    MailOutlined
} from '@ant-design/icons'
import Resume from '../data/resume.pdf'
import { Button } from 'antd';

const Icons = () => {

    const iconStyle = { padding: '15px', fontSize: '22px', color: 'white'};
    const icons = [
        {
            icon: <GithubOutlined className="iconstyle"/>,
            link: 'https://github.com/skeshavaa'
        },
        {
            icon:  <InstagramOutlined />,
            link: 'https://www.instagram.com/s.keshavaa/'
        },
        {
            icon: <LinkedinOutlined />,
            link: 'https://www.linkedin.com/in/keshavaa-shaiskandan-607920199/'
        },
        {
            icon: <MailOutlined />,
            link: "mailto:s.keshavaa@gmail.com"
        },  
    ]

    return (
        <Wrapper>
            <ButtonWrapper>
                <Button icon={<DownloadOutlined />} size={'middle'} ghost target="_blank" href={Resume} download>Download CV</Button>
            </ButtonWrapper>
            {icons.map((icon) => {
                return(
                    <ButtonWrapper>
                        <Button icon={icon.icon} size={'middle'} ghost href={icon.link} target="_blank"/>
                    </ButtonWrapper>
                )
            })}
            
        </Wrapper>
    )
}

export default Icons

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const ButtonWrapper = styled.div`
    padding: 15px;
    padding-left: 0;
`