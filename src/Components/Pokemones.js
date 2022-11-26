import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container , Button, Row, Col} from "react-bootstrap";
import Pokemon from './Pokemon'


const Pokemones =()=>{
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [personajes, setPokemones] =useState([]);
    const[numero,cambiarNumero]=useState(0);
    const [anterior, setAnterior]=useState(null);
    const [siguiente, setSiguiente]=useState(null);

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


    useEffect(() =>{

        console.log(url);
        axios.get(url).then((response) => {
            console.log(response.data.results);
            setPokemones(response.data.results);
            setAnterior(response.data.previous);
            setSiguiente(response.data.next)
        });

    },[url]);
    return (
        <div>
        <Button name="anterior" onClick={ChangeNumero}>Anterior</Button>
        <Button name="siguiente" onClick={ChangeNumero}>Siguiente</Button>


        </div>

    );
        }
}



export default Pokemones;