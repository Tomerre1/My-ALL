import React, { useState, useEffect } from 'react'
import { Popup } from '../cmps/Popup/Popup.jsx'
export function VideosPage() {
    const [videos, setVideos] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [video, setVideo] = useState("https://www.youtube.com/embed/kP_68Zm_IVU")
    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
    useEffect(() => {
        async function fetchVideosData() {
            const res = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC-9-kyTW8ZkZNDHQJ6FgpwQ&maxResults=10&order=date&key=AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs')
            const videos = await res.json()
            setVideos(videos.items)
            console.log('%c  videos.items:', 'color: white;background: red;', videos.items);
        }
        fetchVideosData()
    }, [])

    const onVideoClick = (video) => {
        // setVideo(video)
        setOpenPopup(true)
    }
    // < iframe width = "560" height = "315" src =  title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></ >
    return (
        <>
            <div className="videos-layout">
                <div className="header">
                    <div className="name">
                        <h1>{'טיפים'}</h1>
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
            <Popup title="פרטי הסרטון" openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <iframe title='video-iframe' width="560" height="315" src={`https://www.youtube.com/embed/${youtube_parser('https://www.youtube.com/watch?v=lzQyH-nX0u0')}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>הסבר</p>
            </Popup>
        </>
    )
}

