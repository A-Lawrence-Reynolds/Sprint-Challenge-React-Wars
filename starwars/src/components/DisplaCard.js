import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background: black;
  border-radius: 5px;
  width: 60%;
  display: flex;
  flex-derection: column;
  align-items: center;
  padding-bottom: 10px;
  margin: 25px;
  border: inset lightgray 3px;
`;

const Main2 = styled.div`
  background: darkgray;
  width: 95%;
  border-radius: 5px;
  font-family: "Bangers", cursive;
  margin: 10px;
`;

const Name = styled.h1`
  color: gold;
  font-size: 4rem;
border: 2px soild gray
  padding: 20px;
`;

const Mass = styled.h2``;

const Hair = styled.h2``;

const Bday = styled.h3``;

const Gender = styled.h2``;

const WarCard = props => {
  return (
    <Main>
      <Name>Name:{props.name}</Name>
      <Main2>
        <Mass>Mass: {props.mass}</Mass>
        <Hair>Hair: {props.hair}</Hair>
        <Gender>Gender: {props.gender}</Gender>
        <Bday>Birth-Year: {props.bday}</Bday>
      </Main2>
    </Main>
  );
};

export default WarCard;
