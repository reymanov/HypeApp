import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #4b597b;
`;

const Title = styled.h1`
  font-size: clamp(2em, 4vw, 3em);
`;

const Logo = styled.img`
  width: clamp(4em, 4vw, 5em);
  margin-bottom: 2em;
`;

export { MainContainer, Title, Logo };
