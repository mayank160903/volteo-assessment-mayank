import React from 'react'
import Form from './Form'

const Modal = ({show, onClose, addTask}) => {
  return (
    show && (
        <div className='fixed rounded-2xl cursor-default right-32 top-1/4 w-1/6 h-1/2 justify-center flex items-center text-white bg-black bg-opacity-95 z-10'>
            <div className='relative'>
            <button className='bg-gray-700 mb-10 px-2 text-white hover:bg-red-500' onClick={onClose}>x Close</button>
            <p className='text-white mx-10 pb-4'>Add new Task</p>
            <Form addTask={addTask}/>
            </div>

        </div>

        
    )
  )
}

export default Modal
