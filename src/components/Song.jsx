const Song = (props) => {

    return (
        <div className="songCard">
            <img src={props.song.song_art_image_thumbnail_url} alt="song artwork" />
            <h2>Song Title: {props.song.title_with_featured}</h2>
            <span>{props.song.release_date_for_display}</span>
        </div>

    )
}

export default Song