import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export function VideoPreview({ user, video, onVideoClick }) {
    return (
        <div class="video-preview"
            style={{ backgroundImage: `url(${video.img})`, }}
            onClick={() => onVideoClick(video.url)}
        >
            {user && user.userType === 'אדמין' &&
                <div className="actions">
                    <button className="clean-btn"><EditIcon /></button>
                    <button className="clean-btn"><DeleteIcon /></button>
                </div>
            }
            <p class="video-title">מדריך לבליעת כדורים</p>
            <p>זהו מדריך קצרצר ללמידת בליעת כדורים</p>
            <div class="video-time">{video.duration} דקות</div>
        </div >
    )
}

