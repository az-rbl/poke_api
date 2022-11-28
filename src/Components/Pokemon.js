import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";


const Pokemon = ({character, click}) => {
  const [team, setTeam] =useState(JSON.parse(localStorage.getItem("testJSON")))
  
  const Add_team = (e) =>{
    setTeam(JSON.parse(localStorage.getItem("testJSON")))
    team.push(character);
    console.log(team);
    const myteam = JSON.stringify(team);
    localStorage.setItem("testJSON",myteam);
    click();
    
  }

return(
<Card  bg = 'dark' text = 'white' style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Title>{character.name}</Card.Title> 
  <Button onClick={click} variant="secondary" value={character.name}>Añadir </Button>
  </Card.Body>
</Card>
);


}

export default Pokemon;