

const SearchForm = () => {

    return (
        <div id="searchForm">
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

export default SearchForm