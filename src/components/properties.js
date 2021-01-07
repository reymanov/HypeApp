import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 6em;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  min-height: 10px;
  padding: 0.8em 1em;
  margin-bottom: 1.4em;
  border-radius: 8px;
  text-align: left;
  font-size: 1.2em;
  font-weight: 600;
  box-shadow: 0px 0px 25px -14px #7165f0;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 10px;
    background: #7165f0;
  }
`;

export default function Properties(props) {
  return (
    <Container>
      {props.properties.map((element) => {
        return <Box>{element.title}</Box>;
      })}
    </Container>
  );
}
