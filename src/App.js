import { useState, useEffect } from 'react'
import { BASE_URL } from './global'
import BrandList from './components/BrandList'
import SongList from './components/SongList'
import axios from 'axios'
import './styles/App.css'

const App = () => {
  
  //URL to search for Artist
  const [artist,setArtist] = useState('')
  const [songId,setSongId] = useState('')
  const [songList,setSongList] = useState('')

  const artistUrl = `${BASE_URL}/search`
  const lyricsUrl = `${BASE_URL}/songs/${songId}/lyrics`


  const handleClick = async () => {    
    //API Data with Julio's Key, get me 20 songs by the artist in the search
      const options = {
        method: 'GET',
        params: {q: artist, per_page: '20', page: '1'},
        headers: {
          'X-RapidAPI-Key': '260293e4e7msh690594d6d5fe4c3p10f341jsn1f540203c689',
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
      }

      //API Call
      const response = await axios.get(artistUrl, options)
      setSongList(response.data.response.hits)
      console.log(response.data.response.hits);
      console.log(response);  
  }

// Search form component with input and button
// SongList.jsx - here song list
// SongDetail - api_path to pull song lyric .... map((SONG) => {api_path})

  return (
    <div>
      <p>Enter the full artist name</p>
      <input 
        type='text'
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
       />
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default App;
