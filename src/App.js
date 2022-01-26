
import './App.css';
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

/*
Your public key:
6cedf382495d1006cfe0541128191499
Your private key:
7499d5c3ad69a4d48b366aebe8b4e7ef36db7ff0

const [items, setItems] = useState([]);
*/

function App() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`
