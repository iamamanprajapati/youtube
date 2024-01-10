import React from 'react'

const Button = ({name}) => {
  return (
    <button className='px-6 py-2 m-3 bg-gray-100 rounded-lg w-100%'>
        {name}
    </button>
  )
}

export default Button