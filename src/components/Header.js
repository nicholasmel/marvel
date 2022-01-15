import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <Quote>
                <p>"With great power comes great responsibility."</p>
            </Quote>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/detfa8u-f8a9feb9-93bf-4ae8-b7e0-4d72d20ea73f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGV0ZmE4dS1mOGE5ZmViOS05M2JmLTRhZTgtYjdlMC00ZDcyZDIwZWE3M2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-BT6dJjWBUWuv4jgnO3V9KepFENryC-0uDA3yYNRs_w');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    height: 60vh;
    width: 100vw;
`
const Quote = styled.div`
    height: 20vh;
    width: 20vw;
    color: white;
    background: 0000000;
    margin: 120px 400px;
    justify-content: center;
    text-align: center;

    p {
        padding-top: 100px;
        font-style: italic;
    }
`