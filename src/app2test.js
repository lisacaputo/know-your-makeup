// import { useState, useEffect } from 'react'
// import { BASE_URL } from './global'
// import BrandList from './components/BrandList'
// import axios from 'axios'
// import './styles/App.css'

// const App = () => {
//   const [brands, setBrands] = useState([])

//   //Below pulls song results for Kendrick Lamar
//   const lyricsUrl = 'https://genius-song-lyrics1.p.rapidapi.com/search'

//   const options = {
//     method: 'GET',
//     params: {q: 'Kendrick Lamar', per_page: '20', page: '1'},
//     headers: {
//       'X-RapidAPI-Key': '260293e4e7msh690594d6d5fe4c3p10f341jsn1f540203c689',
//       'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
//     }
//   };

//   // const lyricsUrl = 'https://genius-song-lyrics1.p.rapidapi.com/songs/2396871/lyrics'

//   // const options = {
//   //   method: 'GET',
//   //   headers: {
//   //     'X-RapidAPI-Key': '260293e4e7msh690594d6d5fe4c3p10f341jsn1f540203c689',
//   //     'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
//   //   }
//   // };

//   // const test = '<a href="https://google.com">hello</a>'

//   // const [lyrics, setLyrics] = useState('')  

//   useEffect(()=>{
//     //this will happen right when the component loads
//     const getBrands = async () => {
      
//       //endpoint
//       // const response = await axios.get(`${BASE_URL}`)
//       const response = await axios.get(lyricsUrl, options)
//       //console.log(response);
//       console.log(response.data);
//       //console.log(response.data[0].brand);
//       //const brands = response.data
//       //setBrands(response.data)
//       //console.log(response.data.response.lyrics.lyrics.body.html);
//       // setLyrics(response.data.response.lyrics.lyrics.body.html)
//     }
//     getBrands()
//   }, [])


//   return (
//     <div>
//       <BrandList brands={brands} />
//       {/* <div dangerouslySetInnerHTML={{__html: lyrics}}></div> */}
//     </div>
//   )
// }

// export default App;
