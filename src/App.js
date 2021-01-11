import React from "react";

import Task from "./components/task";
import { MainContainer, Title } from "./styles/AppStyles";

function App() {
  return (
    <MainContainer>
      <Title>Zadanie Rekrutacyjne</Title>
      <Task />
    </MainContainer>
  );
}

export default App;
