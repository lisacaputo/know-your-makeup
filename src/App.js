import { useState, useEffect } from 'react'
import { BASE_URL } from './global'
import SearchForm from './components/SearchForm'
import Song from './components/Song'
import axios from 'axios'
import './styles/App.css'

const App = () => {
  
  //URL to search for Artist
  const [artist,setArtist] = useState('')
  const [songId,setSongId] = useState('')
  const [songList,setSongList] = useState('')
  const [selectedSong, setSelectedSong] = useState(null)

  const artistUrl = `${BASE_URL}/search`
  const lyricsUrl = `${BASE_URL}${songId}/lyrics`
  //Note to self: .env files always needs to exist at the root folder
  const apiKey = process.env.REACT_APP_API_KEY

  const handleClick = async () => {    
    //Get me 20 songs by the artist in the search
      const options = {
        method: 'GET',
        params: {q: artist, per_page: '20', page: '1'},
        headers: {
          'X-RapidAPI-Key': `${apiKey}`,
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
      }

      //API Call
      const response = await axios.get(artistUrl, options)
      setSongList(response.data.response.hits)
      console.log(response.data.response.hits);
      console.log(response);
      
      //Reset Artist input field
      setArtist('')
  }

  useEffect(() => {
    const getSongs = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${apiKey}`,
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
      }


      const response = await axios.get(lyricsUrl,options)
      console.log(lyricsUrl);
      setSongId(response.data.response.hits.results.api_path)
      console.log(songId)
    }
    getSongs()
  }, [])

// SongDetail - api_path to pull song lyric .... map((SONG) => {api_path})

  return (
    <div>
      <SearchForm
        artist={artist}
        setArtist={setArtist}
        handleClick={handleClick}
      />
      <div className='songGrid'>
        {/* Below you need && to make sure the page doesn't get rid of the API results until it's able to pull them for the below */}
        {songList && songList.map((song) => (
          <Song 
            key={song.result.api_path}
            song={song.result}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
