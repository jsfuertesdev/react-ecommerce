import { useEffect, useState } from "react"
import { askData } from "../helpers/askData"
import ItemList from "./ItemList"


const ItemListContainer = () => {
  
    const [products,setProducts] = useState([])

    useEffect(() => {
      askData()
      .then((res)=>{
        setProducts(res)
      })
    }, [])
    

    return (
    <div>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer