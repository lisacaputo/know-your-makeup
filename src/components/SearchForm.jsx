

const SearchForm = (props) => {

    return (
        <div id="searchForm">
            <p>Enter the full artist name</p>
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