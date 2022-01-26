import React from 'react'
import styled from 'styled-components';
import spiderman from '../images/spideyman.png'

function Header() {
    return (
        <Container>
            <Quote>
                <h1>CREATE AWESOME STUFF WITH THE WORLD'S GREATEST COMIC API</h1>
                <p>“With Great Power, There Must Also Come...Great Responsibility”</p>
            </Quote>
            <Quote>
                <h1>Access information about Marvel's vast library of comics</h1>
                <p>“Your Friendly Neighborhood Spider-Man”</p>
            </Quote>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-image: url(${spiderman});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #911F30;
    overflow: hidden;
    height: 60vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`
const Quote = styled.div`
    height: 20vh;
    width: 24vw;
    justify-content: center;
    justify-items: center;
    text-align: center;
    padding: 10vw 14vw;

    h1 {
        padding-top: 20px;
        font-size: large;
        color: #e6e6e6;
        text-transform: uppercase;
    }

    p {
        padding-top: 40px;
        font-style: italic;
        color: #d6d6d6;
    }
`