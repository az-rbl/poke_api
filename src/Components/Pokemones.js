import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container , Button, Card, Col, Row, Stack} from "react-bootstrap";
import Pokemon from './Pokemon'
import Team from "./Team";


const Pokemones =()=>{
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokemones, setPokemones] =useState([]);
    const [team, setTeam] = useState([]);
    const [anterior, setAnterior]=useState(null);
    const [siguiente, setSiguiente]=useState(null);
    const [C, setC]=useState(false)


    const ChangeNumero =(e) =>{
        if(e.target.name ==="anterior"){
            if(anterior!=null){
        e.preventDefault();
        setUrl(anterior);
        }
      }
    
      else if(e.target.name ==="siguiente"){
        if(siguiente!=null){
        e.preventDefault();
        setUrl(siguiente)
        }
      }
    }
    function click_d(e) {

        setC(!C)
        console.log(C)
        console.log(e.target.value)
        team.pop(e.value)
        
    }

    function click_a(e) {
        if(team.length <6){
        setC(!C)
        console.log(C)
        console.log(e.target.value)
        team.push(e.target.value)
        }
    }


    
    useEffect(() =>{
        
        console.log(url);
        axios.get(url).then((response) => {
            console.log(response.data.results);
            setPokemones(response.data.results);
            setAnterior(response.data.previous);
            setSiguiente(response.data.next);
        }
        );
        console.log(team)
        
        
    },[url, C]);
    return (
        <Container>
        <Button name="anterior" onClick={ChangeNumero}>Anterior</Button>
        <Button name="siguiente" onClick={ChangeNumero}>Siguiente</Button>
        
        <Stack direction="horizontal" gap={3} >
        {team.map(character=>
        
            <Team character={character}  click ={click_d}/>
            
            )}
        </Stack>
       
       <Col>
        {pokemones.map(character=>
        <Row key ={character.name}>
            <Pokemon character={character}  click ={click_a}/>
        </Row>)}

        </Col>
 
        </Container>

    );
        
}



export default Pokemones;