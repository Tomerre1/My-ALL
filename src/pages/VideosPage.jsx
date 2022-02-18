import React, { useState, useEffect } from 'react'
import { Popup } from '../cmps/Popup/Popup.jsx'
import { utilService } from '../services/util.service'
export function VideosPage() {
    const [videos, setVideos] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [video, setVideo] = useState('')

    useEffect(() => {
        async function fetchVideosData() {
            const res = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC-9-kyTW8ZkZNDHQJ6FgpwQ&maxResults=10&order=date&key=AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs')
            const videos = await res.json()
            setVideos(videos.items)
            console.log('%c  videos.items:', 'color: white;background: red;', videos.items);
        }
        fetchVideosData()
    }, [])

    const onVideoClick = async () => {
        // setVideo(video)
        setOpenPopup(true)
        var url1 = "https://www.googleapis.com/youtube/v3/videos?id=" + utilService.getYouTubeId('https://www.youtube.com/watch?v=lzQyH-nX0u0') + "&key=AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs&part=snippet,contentDetails";
        const res = await fetch(url1)
        const video = await res.json()
        console.log('%c  video:', 'color: white;background: red;', utilService.formatYoutubeDuration(video.items[0].contentDetails.duration));
        console.log('%c  video:', 'color: white;background: red;', video.items[0].snippet.thumbnails.default.url);
    }
    return (
        <>
            <div className="videos-layout">
                <div className="header">
                    <div className="name">
                        <h1>סרטוני הסבר</h1>
                    </div>
                </div>
                <hr className="border" />
                {videos.map((video) => <div class="video-preview" onClick={() => onVideoClick(video)}>
                    <p class="video-title">מדריך לבליעת כדורים</p>
                    <p>זהו מדריך קצרצר ללמידת בליעת כדורים</p>
                    <div class="video-time">7 דקות</div>
                </div>
                )}

            </div>
            <Popup
                title="פרטי הסרטון"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <iframe title='video-iframe' width="560" height="315" src={`https://www.youtube.com/embed/${utilService.getYouTubeId('https://www.youtube.com/watch?v=lzQyH-nX0u0')}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>הסבר</p>
            </Popup>
        </>
    )
}

