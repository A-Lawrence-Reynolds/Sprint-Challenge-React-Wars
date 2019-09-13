import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background: gray;
  border-radius: 5px;
  width: 60%;
  display: flex;
  flex-derection: column;
  align-items: center;
  padding-bottom: 10px;
  margin: 25px;
`;

const Main2 = styled.div`
  background: darkgray;
  width: 95%;
  border-radius: 5px;
  font-family: "Saira Stencil One", cursive;
  margin: 10px;
`;

const Name = styled.h1`
  color: gold;
  font-size: 4rem;
  text-shadow: black 1px 4px 4px;
  padding: 20px;
`;

const Mass = styled.h2`
  text-shadow: gold 1px 2px 3px;
`;

const Hair = styled.h2`
  text-shadow: gold 1px 2px 3px;
`;

const Bday = styled.h3`
  text-shadow: gold 1px 2px 3px;
`;

const WarCard = props => {
  return (
    <Main>
      <Name>Name:{props.name}</Name>
      <Main2>
        <Mass>Mass:{props.mass}</Mass>
        <Hair>
          Hair:<br></br> {props.hair}
        </Hair>
        <Bday>
          Birth-Year:<br></br> {props.bday}
        </Bday>
      </Main2>
    </Main>
  );
};

export default WarCard;
