import React from "react";
import Card from 'react-bootstrap/Card'

const Pokemon = ({character}) => {

return(
<Card  bg = 'dark' text = 'white' style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Title>{character.name}</Card.Title> 
  </Card.Body>
</Card>
);


}

export default Pokemon;