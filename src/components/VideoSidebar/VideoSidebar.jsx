import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import ShareIconsDialog from '../ShareIconsDialog/ShareIconsDialog';
import './VideoSidebar.css';

function VideoSidebar({ likes, messages, shares, url, title }) {
    const [liked, setLiked] = useState(false);
    const [shared, setShared] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setShared(shares);
    }, [shares]);

    const handleClose = () => {
        setOpenModal(false);
    }
    const handleShare = () => {
        setShared(shared + 1);
    }

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
            <div
                className="videoSidebar__buttons"
                onClick={() => setOpenModal(true)}
            >
                <ShareIcon fontSize="small" />
                <p>{numeral(shared).format('0.0a')}</p>
            </div>
            <ShareIconsDialog
                onClose={handleClose}
                onShare={handleShare}
                open={openModal}
                url={url}
                title={title}
            />
        </div>
    )
}

export default VideoSidebar;
