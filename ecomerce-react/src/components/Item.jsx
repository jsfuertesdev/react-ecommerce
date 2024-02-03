import { Link } from "react-router-dom"

const Item = ({prod}) => {
  return (
    <div className="producto">
        {/* <h2 key={prod.id}>{prod.titulo}</h2> */}
        <img src={prod.imagen} alt={prod.titulo} />
        <div>
            <h4>{prod.titulo}</h4>
            <p>Precio: $ {prod.precio}</p>
            <p>Categoria: {prod.categoria}</p>
            <p>{prod.descripcion}</p>
            <Link className="ver-mas" to={`/item/${prod.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item