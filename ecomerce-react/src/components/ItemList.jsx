import Item from "./Item"

const ItemList = ({products}) => {
    return (
    <div className="container">
        <h2 className="main-title">Productos</h2>
        <div className="productos">
            {products.map((prod) => <Item prod={prod} key={prod.id}/> ) }
        </div>
    </div>
  )
}

export default ItemList