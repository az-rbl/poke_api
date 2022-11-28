import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";


const Team = ({character, click}) => {
  const [team, setTeam] =useState(JSON.parse(localStorage.getItem("testJSON")))
  const Del_team = (e) =>{
    setTeam(JSON.parse(localStorage.getItem("testJSON")))
    team.pop(character);
    console.log(team);
    const myteam = JSON.stringify(team);
    localStorage.setItem("testJSON",myteam);
    click();
    
  }

return(
<Card  bg = 'white' text = 'dark' style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Title>{character}</Card.Title> 
  <Button onClick={click} variant="secondary"value={character}>Borrar </Button>
  </Card.Body>
</Card>
);
}
export default Team;