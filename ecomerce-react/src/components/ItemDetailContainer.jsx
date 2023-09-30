import React, { useEffect, useState } from 'react'
import { askItemById } from '../helpers/askData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({itemId}) => {

    const [item, setItem] = useState(null)

    useEffect(() => {
      askItemById(itemId)
        .then((res)=>{
            setItem(res)
        })
    }, [itemId])
    

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer