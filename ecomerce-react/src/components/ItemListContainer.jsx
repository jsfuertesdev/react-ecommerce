import { useEffect, useState } from "react"
import { askData } from "../helpers/askData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemListContainer = () => {
  
    const [products,setProducts] = useState([])
    const [title, setTitle] = useState("Products")
    const category = useParams().categoria
    // console.log(category)

    useEffect(() => {
      // askData()
      // .then((res)=>{
      //   if (category) {
      //       setProducts( res.filter((prod) => prod.categoria === category));
      //       setTitle(category)
      //   }else{
      //       setProducts(res);
      //       setTitle("Products")
      //   } 
      //       })
      const productosRef = collection(db, "productos");
      const q = category ? query(productosRef, where("categoria", "==", category)) : productosRef

      getDocs(q)
        .then((resp) => {
          setProducts(
            resp.docs.map((doc) => {
              return {...doc.data(), id: doc.id}
            })
          )
        })

    }, [category])
    

    return (
    <div>
        <ItemList products={products} title={title}/>
    </div>
  )
}

export default ItemListContainer