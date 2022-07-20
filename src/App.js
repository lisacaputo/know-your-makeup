import { useState, useEffect } from 'react'
import { BASE_URL } from './global'
import BrandList from './components/BrandList'
import axios from 'axios'
import './styles/App.css'

const App = () => {
  const [brands, setBrands] = useState([])

  useEffect(()=>{
    //this will happen right when the component loads
    const getBrands = async () => {
      
      //endpoint
      const response = await axios.get(`${BASE_URL}`)
      //console.log(response);
      //console.log(response.data);
      //console.log(response.data[0].brand);
      const brands = response.data
      setBrands(brands)
    }
    getBrands()
  }, [])


  return (
    <div>
      {brands.map((brand) => (
        <BrandList 
          key={brand.id}
          //key is the left side, and right side is value getting pulled from the component pulling props i.e. arrays
          brandName={brand.brand}
          itemName={brand.name}
        />
      ))}
    </div>
  )
}

export default App;
