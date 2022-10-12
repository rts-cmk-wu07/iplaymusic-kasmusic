import { useContext, useEffect } from "react";
import TokenContext from "../context/TokenContext";

const Webplayback = ({ player, setPlayer }) => {
  const [token] = useContext(TokenContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-warpper"></div>
      </div>
    </>
  );
};

export default Webplayback;
