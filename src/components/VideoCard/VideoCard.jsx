import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';
import './VideoCard.css';

const VideoCard = forwardRef(({
    url,
    channel,
    desctiption,
    song,
    likes,
    messages,
    shares
}, parentRef) => {

    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

    useImperativeHandle(parentRef, () => ({
        playVideo: () => {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        },
        resetVideo: () => {
            videoRef.current.pause();
        }
    }));


    return (
        <div className="video">
            <video
                ref={videoRef}
                className="video__player"
                src={url}
                onClick={onVideoPress}
                muted={false}
                loop
                allow="autoplay"
            ></video>
            <VideoFooter
                channel={channel}
                desctiption={desctiption}
                song={song}
            />
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
})

export default VideoCard;
