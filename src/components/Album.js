import { useNavigate } from "react-router-dom";

const Album = (props) => {
  const navigate = useNavigate();
  let album = props.album;
  return (
    <div
      className={props.css}
      onClick={(event) => {
        navigate("/album?id=" + props.album.id, {
          state: {
            album: [album.tracks],
            album_name: props.name,
            total_tracks: props.total_tracks,
            src: props.src,
          },
        });
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        className="col-start-1 row-start-1 col-end-2 row-end-2 rounded-md"
      />
      {props.children}
    </div>
  );
};

export default Album;
