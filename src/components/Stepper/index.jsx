import React from 'react'

export const Stepper = ({children}) => {
  return (
    <div className='stepper'>

        {children}
        <div className='buttons'>
            <p>Prev</p>
            <p>Next</p>
        </div>
    </div>
  )
}
