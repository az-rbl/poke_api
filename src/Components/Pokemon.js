import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";


const Pokemon = ({character, click}) => {
  const [team, setTeam] =useState(JSON.parse(localStorage.getItem("testJSON")))
  const [src, setSrc] =useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/")
  
  const Add_team = (e) =>{
    setTeam(JSON.parse(localStorage.getItem("testJSON")))
    team.push(character);
    console.log(team);
    const myteam = JSON.stringify(team);
    localStorage.setItem("testJSON",myteam);
    click();
    
  }
  useEffect ( () =>{
    let id = character.url.replace("https://pokeapi.co/api/v2/pokemon/",'')
    id = id.slice(0, -1);
    setSrc(src + id +".png")
  },[])

return(
<Card  bg = 'dark' text = 'white' style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Title>{character.name}</Card.Title> 
  <img src = {src}></img>
  <Button onClick={click} variant="secondary" value={character.name}>Añadir </Button>
  </Card.Body>
</Card>
);


}

export default Pokemon;