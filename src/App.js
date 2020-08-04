import React, { createRef, useEffect, useRef, useState } from 'react';
import './App.css';
import VideoCard from './components/VideoCard/VideoCard';
import db from './firebase';

function App() {

  const videoContainerRef = useRef();
  const [videos, setVideos] = useState([]);

  /* uncomment this block if you need to add some values to the collection
     
    useEffect(() => {

    const dataToAdd = [
      {
        url: "https://v16m.tiktokcdn.com/e68773e90c0f91bf334519bd0c370b60/5f2afa0e/video/tos/alisg/tos-alisg-pve-0037/91c7bc111a914ab48e253a6e4502feda/?a=1180&br=2504&bt=1252&cr=0&cs=0&dr=3&ds=3&er=&l=202008031827250101152290660420AED1&lr=tiktok&mime_type=video_mp4&qs=0&rc=ajx1M2o0PDh4djMzZzgzM0ApaWg0ZTs2ZWQ6N2kzODtkZmdtMjE0YHEuaGdfLS0wLzRzcy80NTQ1MDIuMl8xYzZiX2I6Yw%3D%3D&vl=&vr=",
        channel: "jejirose",
        desctiption: "I love my family and you",
        song: "I need your LOVE I need your TIME - Remix",
        likes: 523000,
        messages: 232,
        shares: 1539
      }
    ]
    const runTransaction = async () => {
      for (const data of dataToAdd) {
        await db.collection('videos').add(data);
      }
    }
    runTransaction();
  }, []); */

  useEffect(() => {
    /* Fetch all available videos */
    db.collection('videos').orderBy("likes", 'desc').onSnapshot(snapshot => {
      const videoData = snapshot.docs.map(doc => doc.data());
      setVideos([...videoData]);
    });
  }, []);

  /* 
    create dynamic refs based on videos 
    Referance: https://stackoverflow.com/a/54633947/3719000
  */
  const [childRefs, setChildRefs] = useState([]);
  useEffect(() => {
    // add or remove refs
    setChildRefs(elRefs => (
      Array(videos.length).fill().map((_, i) => elRefs[i] || createRef())
    ));
  }, [videos.length]);

  useEffect(() => {
    if (childRefs.length) {
      childRefs[0].current.playVideo();
    }
  }, [childRefs]);

  /* onscroll pause all videos & only play active video */
  let timer = null;
  const handleScroll = _ => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      const { scrollTop, clientHeight } = videoContainerRef.current;
      const activeVideoIndex = Math.round(scrollTop / clientHeight);

      childRefs.forEach((elRef, index) => {
        if (index === activeVideoIndex) {
          elRef.current.playVideo();
        } else {
          elRef.current.resetVideo();
        }
      })

      timer = null;
    }, 100);
  }

  return (
    <div className="app">
      <div className="app__videos" ref={videoContainerRef} onScroll={handleScroll}>
        {
          videos.map(({
            url,
            channel,
            desctiption,
            song,
            likes,
            messages,
            shares
          }, index) => (
              <VideoCard
                key={index}
                ref={childRefs[index]}
                url={url}
                channel={channel}
                desctiption={desctiption}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
              />
            ))
        }
      </div>
    </div>
  );
}

export default App;
