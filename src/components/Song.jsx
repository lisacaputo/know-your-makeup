const Song = (props) => {

    return (
        <div className="songCard">

            <img src={props.song.song_art_image_thumbnail_url} alt="song artwork" />
            <h2>Song Title: {props.song.title}</h2>



        </div>

    )
}

export default Song