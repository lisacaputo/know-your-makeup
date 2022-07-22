import { useState } from 'react'
import { BASE_URL } from './global'
import SearchForm from './components/SearchForm'
import Song from './components/Song'
import Lyrics from './components/Lyrics'
import axios from 'axios'
import './styles/App.css'

const App = () => {
  
  //URL to search for Artist
  const [artist,setArtist] = useState('')
  const [songList,setSongList] = useState('')
  const [lyrics, setLyrics] = useState(null)

  const artistUrl = `${BASE_URL}/search`
  
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

      //API Call for Song List based on Artist Entry
      const response = await axios.get(artistUrl, options)
      setSongList(response.data.response.hits)
      // console.log(response.data.response.hits);
      // console.log(response);
      
      //Reset Artist input field
      setArtist('')
  }

  const getLyrics = async (songId) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${apiKey}`,
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    }
    const lyricsUrl = `${BASE_URL}${songId}/lyrics`

    const response = await axios.get(lyricsUrl,options)
    setLyrics(response.data.response.lyrics.lyrics.body.plain);
  }
  
  return (
    <>
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
            songId={song.result.api_path}
            getLyrics={getLyrics}
          />
        ))}
      </div>
      <Lyrics 
        lyrics={lyrics}
      />
    </>
  )
}

export default App;
