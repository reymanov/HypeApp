import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 10px;
  max-height: 1000px;
  margin: 6em 1em 0 -2em;
  display: flex;
  flex-direction: column;
  color: #4b597b;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 1.6rem;
  margin-bottom: 1.4em;
  border-radius: 8px;
  text-align: left;
  font-size: 1em;
  font-weight: 900;
  box-shadow: 0px 0px 25px -14px #7165f0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 11px;
    background: linear-gradient(
      180deg,
      rgba(169, 116, 247, 1) 0%,
      rgba(119, 116, 247, 1) 100%
    );
    border-radius: 8px 0 0 8px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: -78px;
    top: 50%;
    width: 80px;
    height: 1px;
    background: lightgrey;
    z-index: -1;
  }
`;

const RemoveButton = styled.button`
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  margin-right: 0.4em;
  color: #fff;
  background: linear-gradient(180deg, #f76b90 0%, #f6668a 100%);
  box-shadow: 0px 0px 10px -2px #f6668a;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease;

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2.8px;
    background: #fff;
    border-radius: 1px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px #f6668a;
  }
`;

const LeftParagraph = styled.p`
  position: absolute;
  font-size: 0.95em;
  font-weight: 500;
  color: darkgrey;
  left: -125px;
`;

export { Container, Box, RemoveButton, LeftParagraph };
