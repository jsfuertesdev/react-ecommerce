import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const Checkout = () => {

    const [pedidoId, setPedidoID] = useState("")
    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    const {register, handleSubmit} = useForm()

    const comprar = (data) => {
      const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()
      }
      console.log(pedido)

      const pedidoRef = collection(db, "pedidos")
      addDoc(pedidoRef, pedido)
        .then((doc)=>{
            setPedidoID(doc.id)
            vaciarCarrito()
        })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">¡Muchas gracias por tu compra!</h1>
                <p>tu numero de id es <strong>{pedidoId}</strong></p>
            </div>
        )
    }

  return (
    <div className='container'>
      <h1 className='main-title'>Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
            <input type="text" placeholder='Ingres tu e-mail' {...register("email")}/>
            <input type="phone" placeholder='Ingres tu phone' {...register("telefono")}/>
            <button className='enviar'
            type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Checkout