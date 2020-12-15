import { useState, useRef } from 'react';
//Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

//Import Styles
import './styles/app.scss';

//Import Data
import data from './data';
function App() {
  //Ref
  const audioRef = useRef(null);

  //Handlers
  const timeUpdateHandler = (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime, duration})
  }

  const songEndHandler = async () => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      if (isPlaying) audioRef.current.play();
  }

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0 
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
      currentSong={currentSong}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      audioRef={audioRef}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      songs={songs}
      setSongs={setSongs}
      setCurrentSong={setCurrentSong}
      />
      <Library 
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
        ref={audioRef} 
        src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
