
import styled from "styled-components";

const RoleDice = ({CurrentDice, rollDice}) => {
  

  
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`./Assects/dice_${CurrentDice}.png`} alt="Reload" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .dice {
  }
  p {
  }
`;
