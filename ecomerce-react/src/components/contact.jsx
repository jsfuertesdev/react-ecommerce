import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {

  const {register, handleSubmit} = useForm()

  const enviar = (data) => {
    console.log(data)
  }

  return (
    <div className='container'>
      <h1 className='main-title'>Contact</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
            <input type="text" placeholder='Ingres tu e-mail' {...register("email")}/>
            <input type="phone" placeholder='Ingres tu phone' {...register("telefono")}/>
            <button className='enviar'
            type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact