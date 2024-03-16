import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";
const StartGame = ({toogle}) => {
  return (
    <Container>
        <div>
      <img src="./Assects/dics.png" alt="Reload" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toogle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
