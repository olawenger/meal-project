import React from 'react'
import Loading from './Loading'
import { UseGlobalContext } from '../context/context' 
import { Link} from "react-router-dom";

const MealList = () => {
  const {isLoading, foods} = UseGlobalContext()
  if (isLoading) {
    <Loading/>
    
  }

  if (foods.length < 1) {
    return(
    
      <h1 className='text-success text-center my-5'> 😜😜😜😜😜 No food Found</h1>

    );
    
  }
  return (
    <div id='below' className='container d-flex flex-wrap justify-content-between align-items-center'>

      
    { 
    foods.map ((food) => {
      const {idMeal, strMealThumb, StrCategory, strMeal} = food;
      return <Link to={`/meal/ ${idMeal}`} className='text-decoration-none my-3 mx-auto' key={idMeal}>
        <div 
          style={{width: "280px"}}
          className='shadow shadow-lg card rounded-2'  
            >
              <img src= {strMealThumb}alt={strMeal}
              className='rounded-top-2 w-100' />
              <h4 className='text-success fw-bold text-center mt-3' > {strMeal} </h4>
              <h5 className='text-secondary text-center fw-light'> {StrCategory} </h5>

        </div>
      </Link>


    })
    }
      
      
      </div>
  )
}

export default MealList