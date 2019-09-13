import React, { useState, useEffect } from "react";
import axios from "axios";
import WarCard from "./WarCard";

export default function WarList() {
  //function starts
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
        console.log("from API Data get you will not");
      });
  }, []);

  return list.map(item => {
    return (
      <WarCard
        name={item.name}
        mass={item.mass}
        hair={item.hair_color}
        bday={item.birth_year}
      />
    );
  });

  return <WarCard list={list} />;
} // function ends
