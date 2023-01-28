import React from 'react'
import usePacientes from '../hooks/usePacientes';
const Paciente = ({paciente}) => {
    const {setEdicion,eliminarPaciente}=usePacientes()
    const {email,fehca,nombre,propietario,sintomas,_id} = paciente;
    
    

    const formatearFecha = (fehca) => {
        const nuevaFecha = new Date(fehca)
        return new Intl.DateTimeFormat('es-MX',{dateStyle:'long'}).format(nuevaFecha)
    }
    
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold uppercase text-indigo-700 my-2'>Nombre: {''} <span className=' font-normal normal-case text-black'>{nombre}</span></p>

        <p className='font-bold uppercase text-black my-2'>Propietario: {''} <span className=' font-normal normal-case text-black'>{propietario}</span></p>

        <p className='font-bold uppercase text-black my-2'>Email del Propietario: {''} <span className=' font-normal normal-case text-black'>{email}</span></p>

        <p className='font-bold uppercase text-black my-2'>Fecha de alta: {''} <span className=' font-normal normal-case text-black'>{formatearFecha(fehca)}</span></p>
        <p className='font-bold uppercase text-black my-2'>Sintomas: {''} <span className=' font-normal normal-case text-black'>{sintomas}</span></p>

        <div className=' flex justify-between my-5 '>
            <button type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white uppercase font-bold rounded-lg'
            onClick={()=>setEdicion(paciente)}>
                Editar
            </button>

            <button type='button' className='py-2 px-10 bg-red-500 hover:bg-red-900 text-white uppercase font-bold rounded-lg'
            onClick={()=>eliminarPaciente(_id)}
            >
                Eliminar
            </button>



        </div>
    </div>
  )
}

export default Paciente