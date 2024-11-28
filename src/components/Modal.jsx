import React from 'react'
import Form from './Form'

const Modal = ({show, onClose}) => {
  return (
    show && (
        <div className='fixed rounded-2xl cursor-default right-32 top-1/4 w-1/6 h-1/2 justify-center flex items-center text-white bg-green-300 bg-opacity-90 z-10'>
            <div className='relative'>
            <button className='rounded-xl mb-10 bg-red-500 px-2 text-white' onClick={onClose}>X</button>
            <p className='text-black mx-10 pb-4'>Add new Task</p>
            <Form />
            </div>

        </div>

        
    )
  )
}

export default Modal
