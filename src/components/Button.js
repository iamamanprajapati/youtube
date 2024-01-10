import React from 'react'

const Button = ({name}) => {
  return (
    <button className='px-5 py-2 m-2 bg-gray-100 rounded-lg w-100%'>
        {name}
    </button>
  )
}

export default Button