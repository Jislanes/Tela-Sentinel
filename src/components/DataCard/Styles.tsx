
import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem;
  
`;


export const TableConf = styled.div`
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-top: 20px;

  button {
    color: black;
    border-radius: 12px;;
    border: 1px solid transparent;
    margin: 2px;
    display: flex;
    align-items: center;
    background-color:#FFC629;
  }
  button:hover {
    color: #424141;
    border-radius: 12px;;
    border: 1px solid transparent;
    margin: 2px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
  }
`;

export const ContainerButton = styled.div`
 
  Button {
    color: black;
    border-radius: 12px;;
    border: 1px solid transparent;
    margin: 2px;
    display: flex;
    align-items: center;
    background-color:#FFC629; cursor: pointer;
  }
  
`;



export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export const ButtonSelected = styled.div`
.default{
  color: #807f7f;
    border-radius: 12px;;
    border: 1px solid #807f7f;
    margin: 2px;
}

.info{
  color: blue;
    border-radius: 12px;;
    border: 1px solid blue;
    margin: 2px;

}

.all{
  color: black;
    border-radius: 12px;;
    border: 1px solid black;
    margin: 2px;

}
.warning{
  color: #ffc400;
    border-radius: 12px;;
    border: 1px solid #ffc400;
    margin: 2px;

}
.danger{
  color: red;
    border-radius: 12px;;
    border: 1px solid red;
    margin: 2px;

}`; 

export const BiggerCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  max-width: 2000px;
  min-height: 500px;
  align-items: start;
  justify-content: center;

  div {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  label {
    font-weight: bold;
    color: black;
  }

  input {
    display: flex;
    text-decoration: none;
    flex-direction: row;
    width: 20rem;
    border-style: hidden;
    background-color: transparent;
  }
`;
