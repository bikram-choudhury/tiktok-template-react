import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import numeral from 'numeral';
import './VideoSidebar.css';

function VideoSidebar({ likes, messages, shares }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div
                className="videoSidebar__buttons"
                onClick={() => setLiked(!liked)}
            >
                {
                    liked ? (
                        <FavoriteIcon fontSize="large" />
                    ) : (
                            <FavoriteBorderIcon fontSize="large" />
                        )
                }
                <p>{liked ? numeral(likes + 1).format('0.0a') : numeral(likes).format('0.0a')}</p>
            </div>
            <div className="videoSidebar__buttons">
                <MessageIcon fontSize="small" />
                <p>{numeral(messages).format('0.0a')}</p>
            </div>
            <div className="videoSidebar__buttons">
                <ShareIcon fontSize="small" />
                <p>{numeral(shares).format('0.0a')}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;
