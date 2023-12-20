import React from 'react'

const Footer = () => {
  return (
    <div className='bg-success-subtle text-success text-center py-3'>
        <h3 className='fw-light'>
            {""}
            &copy;{new Date().getFullYear()} All Rights Reserved
        </h3>

        <h4 className='mt-1 fw-bold '>The Meal Page</h4>
    </div>
  )
}

export default Footer