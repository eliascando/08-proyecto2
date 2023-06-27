import '../components/css/Portafolio.css'
import { trabajos } from "../data/trabajos.js"
import { Link } from "react-router-dom"

export const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <div className="works">
        {
          trabajos.map(trabajo => {
            return(
              <article key={trabajo.id} className="work-item">
                <h1><Link to={`/proyecto/${trabajo.id}`} className='link'>{trabajo.nombre}</Link></h1>
                <img src={`../src/assets/images/${trabajo.id}.png`} alt={trabajo.nombre} />
                <p className='categorias'>{trabajo.categorias}</p>
                <h3 className='tecnologias'>{trabajo.tecnologias}</h3>
              </article>
            );
          })
        }
      </div>
    </div>
  )
}
