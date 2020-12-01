import React, { useState, useEffect } from 'react';
import './App.css';
import Video from "./Components/Video/Video";
import db from './Components/LoginAuth/firebase';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [])
  return (
    <div className="app">
      {/* <h1>Let's Build tik-tok clone app &#128640; &#9996;</h1> */}
      <div className="app__videos">
        {
          videos.map(({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />))
        }
      </div>

    </div>
  );
}

export default App;
