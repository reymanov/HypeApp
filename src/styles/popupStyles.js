import styled from "styled-components";

const PopupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(48, 48, 48, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const PopupForm = styled.form`
  width: 400px;
  height: 200px;
  background: #fff;
  border-radius: 0.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 80%;
  height: 3em;
  padding: 0em 1em;
  background: #fff;
  border: 1px darkgrey solid;
  border-radius: 0.6em;
  font-size: 1.2em;
  outline: none;
`;

const CancelButton = styled.button`
  padding: 0.5em 1.2em;
  margin: 0 1em;
  font-size: 1.2em;
  font-weight: 500;
  background: rgb(219, 219, 219);
  border: none;
  border-radius: 0.6em;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const ConfirmButton = styled.button`
  padding: 0.5em 1.8em;
  margin: 0 1em;
  font-size: 1.2em;
  font-weight: 500;
  color: #fff;
  background: linear-gradient(
    180deg,
    rgba(43, 231, 163, 1) 0%,
    rgba(48, 232, 222, 1) 100%
  );
  border: none;
  border-radius: 0.6em;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export { PopupContainer, PopupForm, Input, CancelButton, ConfirmButton };
