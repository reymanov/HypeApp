import React from "react";

import Task from "./components/task";
import LogoImg from "../src/assets/logo.png";
import { MainContainer, Title, Logo } from "./styles/AppStyles";

function App() {
  return (
    <MainContainer>
      <Logo src={LogoImg}></Logo>
      <Title>Zadanie Rekrutacyjne</Title>
      <Task />
    </MainContainer>
  );
}

export default App;
