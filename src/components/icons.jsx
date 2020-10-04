import React from 'react'
import styled from 'styled-components'
import { 
    GithubOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    DownloadOutlined
} from '@ant-design/icons'
import { Button } from 'antd';

const Icons = () => {

    const iconStyle = { padding: '15px', fontSize: '22px', color: 'white'};
    const icons = [
        <GithubOutlined />,
        <InstagramOutlined />,
        <LinkedinOutlined />
    ]

    return (
        <Wrapper>
            <ButtonWrapper>
                <Button icon={<DownloadOutlined />} size={'large'} ghost>Download CV</Button>
            </ButtonWrapper>
            {icons.map((icon) => {
                return(
                    <ButtonWrapper>
                        <Button icon={icon} size={'large'} ghost/>
                    </ButtonWrapper>
                )
            })}
            
        </Wrapper>
    )
}

export default Icons

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`

const ButtonWrapper = styled.div`
    padding: 15px;
    padding-left: 0;
`