import React from 'react'
import { VideoPreview } from './VideoPreview'
export function VideosList({ videos, onVideoClick, user, onRemoveVideo }) {
    return (
        <div className="videos-list">
            {videos.map((vid, idx) => <VideoPreview key={idx} onRemoveVideo={onRemoveVideo} user={user} video={vid} onVideoClick={onVideoClick} />)}
        </div>
    )
}

