import '../components/css/Inicio.css'
import { Link } from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Elías Cando</strong>  y soy <strong>desarrollador</strong>, ofrezco mis servicios de <strong>programación </strong> 
        y todo tipo de proyectos web
      </h1>
      <h2>
        Te ayudo a crear tu sitio web para que tu negocio o proyecto tenga presencia.
        <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className="last-works">
        <h2 className='heading'>Últimos trabajos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <div className="works">
        
        </div>
      </section>
    </div>
  )
}