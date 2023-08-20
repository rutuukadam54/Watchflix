import React from 'react';
import background from "../assets/login.jpg";
import styled from "styled-components";


export default function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background"/>
    </Container>
  );
}

const Container = styled.div`
height:100vh;
width: 100vw;
img{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 110vh;
  width: 100vw:
}
`;


