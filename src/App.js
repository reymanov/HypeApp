import React from "react";
import styled from "styled-components";

import Task from "./components/task";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Title = styled.h1`
  font-size: 3em;
`;

function App() {
  return (
    <MainContainer>
      <Title>Zadanie Rekrutacyjne</Title>
      <Task />
    </MainContainer>
  );
}

export default App;
