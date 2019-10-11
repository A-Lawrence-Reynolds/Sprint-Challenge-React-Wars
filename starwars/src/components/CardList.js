import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCard from "./DisplaCard";
export default function CardList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response);
        const list = response.data.results;
        setList(list);
      })
      .catch(error => {
        console.log("No data from API");
      });
  }, []);

  return list.map(item => {
    return (
      <DisplayCard
        name={item.name}
        mass={item.mass}
        hair={item.hair_color}
        bday={item.birth_year}
        gender={item.gender}
      />
    );
  });
  return <DisplayCard list={list} />;
}
