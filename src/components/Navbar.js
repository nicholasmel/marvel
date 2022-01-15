import React from 'react';
import styled from 'styled-components';

function Navbar() {
    return (
        <Container>
            <Menu>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1024px-Marvel_Logo.svg.png" alt="" />
            </Menu>
            <RightMenu>
            </RightMenu>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    background-color: #000000d6;
    color: white;

    h1 {
        opacity: 1 !important;
        font-size: x-large;
        color: white;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    img {
        height: 6vh;
        width: 9vw;
    }

    @media(max-width: 768px) {
        display:none;
    }
        cursor: pointer;
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    opacity: 1;
    padding-left: 0px;
    cursor: pointer;
`;
