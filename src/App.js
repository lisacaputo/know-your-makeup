import { useState, useEffect } from 'react'
import { BASE_URL } from './global'
import BrandList from './components/BrandList'
import axios from 'axios'
import './styles/App.css'

const App = () => {
  useEffect(()=>{
    //this will happen right when the component loads
    const getBrands = async () => {
      //const brand = 
      //endpoint
      const response = await axios.get(`${BASE_URL}`)
      //console.log(response);
      console.log(response.data);
    }
    getBrands()
  }, [])


  return (
    <div>

    </div>
  )
}

export default App;
