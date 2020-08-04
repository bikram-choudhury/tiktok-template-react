import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import WhatsappShareButton from 'react-share/es/WhatsappShareButton';
import WhatsappIcon from 'react-share/es/WhatsappIcon';
import FacebookShareButton from 'react-share/es/FacebookShareButton';
import FacebookIcon from 'react-share/es/FacebookIcon';
import TwitterShareButton from 'react-share/es/TwitterShareButton';
import TwitterIcon from 'react-share/es/TwitterIcon';
import LinkedinShareButton from 'react-share/es/LinkedinShareButton';
import LinkedinIcon from 'react-share/es/LinkedinIcon';
import './ShareIconsDialog.css';

function ShareIconsDialog({ onClose, onShare, open, url, title }) {
    const iconSize = 25;
    const iconRadius = 10;

    return (
        <Dialog
            className="shareIconDialog"
            aria-labelledby="share-icons-dialog"
            onClose={onClose}
            open={open}
        >
            <DialogTitle className="shareIconDialog__title">Share with</DialogTitle>
            <DialogContent className="shareIconDialog__body">
                <WhatsappShareButton
                    title={title}
                    url={url}
                    separator="::: "
                    onShareWindowClose={onShare}
                    className="share__btn"
                >
                    <WhatsappIcon size={iconSize} borderRadius={iconRadius} />
                </WhatsappShareButton>
                <FacebookShareButton
                    title={title}
                    url={url}
                    onShareWindowClose={onShare}
                    className="share__btn"
                >
                    <FacebookIcon size={iconSize} borderRadius={iconRadius} />
                </FacebookShareButton>
                <LinkedinShareButton
                    url={url}
                    title={title}
                    onShareWindowClose={onShare}
                    className="share__btn"
                >
                    <LinkedinIcon size={iconSize} borderRadius={iconRadius} />
                </LinkedinShareButton>
                <TwitterShareButton
                    url={url}
                    title={title}
                    onShareWindowClose={onShare}
                    className="share__btn"
                >
                    <TwitterIcon size={iconSize} borderRadius={iconRadius} />
                </TwitterShareButton>
            </DialogContent>
        </Dialog>
    )
}

export default ShareIconsDialog;
