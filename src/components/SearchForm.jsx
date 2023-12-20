import React from 'react'
import { UseGlobalContext } from '../context/context'
import { useRef } from 'react'
const SearchForm = () => {
  const {setSearchValue} = UseGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputContainer = useRef();
  return (
    <div className='my-3'>

      <form className='w-50 mx-auto' onSubmit={handleSubmit}>

        <label htmlFor="name" className='form-label text-success fw-bold fs-4 text-center w-100'> Search for your favorite meal</label>
        <input 
        ref={inputContainer}
        onChange={() => setSearchValue(inputContainer.current.value)}
        type="text" 
        id='name'
         className='form-control border border-success border-2 shadow-none bg-success-subtle shadow-none bg-success fs-5 ' />
      </form>
    
    </div>
  )
}

export default SearchForm