import React from 'react'

const Playlist = () => {
    <div id="embed-iframe"></div>
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
  //
};
  return (
    <iframe
        title="Vibez "
        src={`https://open.spotify.com/embed/playlist/5J3beXtGHeF7BFTMcdlRpD?si=b14c454d157240df?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        style={{ minHeight: '360px', backgroundColor: 'black'}}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
    />
  )
}

export default Playlist