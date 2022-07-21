const Song = (props) => {

    return (
        <div className="songCard">

            <img src={props.header_image_thumbnail_url} alt="song artwork" />
            <h2>Song Title: {props.title}</h2>



        </div>

    )
}

export default Song