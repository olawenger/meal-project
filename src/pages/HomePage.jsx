import React from 'react'
import Hero from '../components/Hero'
import SearchForm from '../components/SearchForm'
import MealList from '../components/MealList'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <MealList />
    </div>
  )
}

export default HomePage