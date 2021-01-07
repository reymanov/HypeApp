import React, { useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 600px;
  min-height: 600px;
  padding: 4em;
  margin: 2em auto;
  border-radius: 5%;
  background: #fff;
  text-align: center;
`;

const People = styled.div`
  width: 220px;
  background: linear-gradient(
    180deg,
    rgba(169, 116, 247, 1) 0%,
    rgba(119, 116, 247, 1) 100%
  );
  border-radius: 5%;
  padding: 0.8em 1em;
  color: #fff;
  font-size: 1.4em;
  font-weight: 600;
`;

export default function Task() {
  return (
    <AppContainer>
      <People>People</People>
    </AppContainer>
  );
}
