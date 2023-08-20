import React from "react";
import  styled  from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <button onClick={()=>navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  );
}

const Container = styled.div`
padding:4rem;
.logo {
  img {
    background-color: #e50914;
    position:center;
    padding-top:1rem;
    height: 5rem;
  }
}
button{
  padding: 0.5rem lrem;
  background-color: #e50914;
  border: none;
  cursur: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: border;
  font-size:1.6rem;
}
`;
