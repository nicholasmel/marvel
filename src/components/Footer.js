import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Container>
            <IconContainer>
                <LinkedInIcon sx={{ fontSize: '40px', color: 'red' }} onClick={() => window.open('https://www.linkedin.com/in/nicholasmel/')} />
                <GitHubIcon sx={{ fontSize: '40px', color: 'red' }} onClick={() => window.open('https://github.com/nicholasmel')} />
            </IconContainer>
            <img src="https://www.marvel.com/static/images/favicon/android-chrome-icon-194.png" alt="" />
        </Container>
    )
}

export default Footer

const Container = styled.div`
    height: 250px;
    background-image: url('https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey03_ons_mas_dsk_01.jpg');
    background-position: top;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
        height: 10vh;
        width: auto;
    }
`

const IconContainer = styled.div`
    height: auto;
    width: 20%;
    padding-top: 40px;
    padding-left: 110px;
    display: flex;
    justify-content: space-evenly;
`
