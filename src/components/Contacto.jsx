import '../components/css/Contacto.css'

export const Contacto = () => {
  return (
    <div className="page">
      <h1>Contacto</h1>
      <form className="contact" action="mailto:elias.candoj@gamil.com">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Mensaje"></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}