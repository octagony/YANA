import React from 'react'

const Button = ({children, noteAction, className}) => {
  return (
    <button
          className={`mt-2 p-2 bg-emerald-400 text-xl text-gray-900  bg-transparent border-2 rounded-2xl shadow-lg transition hover:bg-lime-200 hover:text-neutral-900 ${className}`}
          onClick={noteAction}
          aria-label="Save"
        >
          {children}
        </button>
  )
}

export default Button