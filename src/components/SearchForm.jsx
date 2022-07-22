const SearchForm = (props) => {

    return (
        <div id="searchForm">
            <h1>Welcome to Song Expert</h1>
            <p>Enter the full artist name to retrieve the top 20 songs listed by the Genius API</p>
            <input
                type='text'
                value={props.artist}
                onChange={(event) => props.setArtist(event.target.value)}
            />
            <button onClick={props.handleClick}>Search</button>
        </div>

    )
}

export default SearchForm