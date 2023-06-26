/* eslint-disable react-hooks/exhaustive-deps */
import '../components/css/Proyecto.css'
import { useParams } from "react-router-dom";
import { trabajos } from "../data/Trabajos";
import { useState, useEffect } from "react";

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);
    },[]);

  return (
    <div className="page">
        <h1 className="heading">Proyecto : {proyecto.nombre}</h1>
        <img src={`../src/assets/images/${proyecto.id}.png`} alt={proyecto.nombre} />
        <p className='categorias'>{proyecto.categorias}</p>
        <h3 className='tecnologias'>{proyecto.tecnologias}</h3>
        <p className='descripcion'>{proyecto.descripcion}</p>
        <a href={proyecto.url} target="_blank" rel="noreferrer" className="btn">Ver Proyecto</a>
    </div>
  )
}