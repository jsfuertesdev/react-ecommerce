const Item = ({prod,key}) => {
  return (
    <div className="producto">
        {/* <h2 key={prod.id}>{prod.titulo}</h2> */}
        <img src={prod.imagen} alt="" />
        <div>
            <h4>{prod.titulo}</h4>
            <p>Precio: $ {prod.precio}</p>
            <p>Categoria: {prod.categoria}</p>
            <p>{prod.descripcion}</p>
            <a className="ver-mas" href={`/item/${prod.id}`}>Ver mas</a>
        </div>
    </div>
  )
}

export default Item