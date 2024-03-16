
import styled from "styled-components";

const NumberSelector = ({setError,selectedNumber, setselectedNumber,error}) => {

  const numberSelectorHandler= (value)=>{
    setselectedNumber(value)
    setError("")
  }
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
    <div className="flex">
      {array.map((value, i) => (
        <Box
          key={i}
          onClick={()=>numberSelectorHandler(value) }
          isSelected={selectedNumber === value}
        >
          {value}
        </Box>
      ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  );
};




const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap:24px;
}
.p{
    font-size: 24px;
    font-weight: 700px;
}
.error{
  color: red;
}
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=> props.isSelected?"black":"white"};
  color: ${(props)=> !props.isSelected?"black":"white"};
`;

export default NumberSelector;
