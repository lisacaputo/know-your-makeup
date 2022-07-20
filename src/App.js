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
          brandName={brand.brandName}
          itemName={brand.itemName}
        />
      ))}
    </div>
  )
}

export default App;
