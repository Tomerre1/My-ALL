import React, { useState, useEffect } from 'react'
import { Popup } from '../cmps/Popup/Popup.jsx'
import { utilService } from '../services/util.service'
import { VideosList } from '../cmps/UserVideos/VideosList'
import { AddVideo } from '../cmps/UserVideos/AddVideo'
import { useSelector, useDispatch } from 'react-redux'
import { CmpHeader } from '../cmps/Header/CmpHeader'
import { Loader } from '../cmps/Loader/Loader'
import { setLoadingOn, setLoadingOff } from '../store/system.actions'

export function VideosPage() {
    const [videos, setVideos] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [video, setVideo] = useState({
        videoName: '',
        videoUrl: '',
        videoDescription: ''
    })
    const [isAdminAddVideo, setIsAdminAddVideo] = useState(false)
    const user = useSelector(state => state.userReducer.user)
    const isLoading = useSelector(state => state.systemReducer.isLoading)
    const dispatch = useDispatch()

    const fetchVideo = async (vid) => {
        var urlRequest = "https://www.googleapis.com/youtube/v3/videos?id=" + utilService.getYouTubeId(vid.videoUrl) + "&key=AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs&part=snippet,contentDetails"
        const res = await fetch(urlRequest)
        const resVideo = await res.json()
        const duration = utilService.formatYoutubeDuration(resVideo.items[0].contentDetails.duration)
        return { ...vid, duration, img: resVideo.items[0].snippet.thumbnails?.high.url || resVideo.items[0].snippet.thumbnails.default.url }
    }

    useEffect(() => {
        async function fetchVideosData() {
            dispatch(setLoadingOn())
            const res = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC-9-kyTW8ZkZNDHQJ6FgpwQ&maxResults=10&order=date&key=AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs')
            // const videos = await res.json()
            // setVideos(videos.items)
            // console.log('%c  videos.items:', 'color: white;background: red;', videos.items);
            // const futureFetch = ['https://www.youtube.com/watch?v=lzQyH-nX0u0', 'https://www.youtube.com/watch?v=lzQyH-nX0u0', 'https://www.youtube.com/watch?v=lzQyH-nX0u0']
            // const videosWithDuration = futureFetch.map(async (videoUrl) => {
            //     var urlRequest = "https://www.googleapis.com/youtube/v3/videos?id=" + utilService.getYouTubeId(videoUrl) + "&key=AIzaSyBxe9n_zywx_EH1njOLVtNXGIlojjcAhbs&part=snippet,contentDetails"
            //     const res = await fetch(urlRequest)
            //     const video = await res.json()
            //     const duration = utilService.formatYoutubeDuration(video.items[0].contentDetails.duration)
            //     return { videoUrl, duration, img: video.items[0].snippet.thumbnails?.high.videoUrl || video.items[0].snippet.thumbnails.default.videoUrl }
            // })
            // Promise.all(videosWithDuration).then(videos => {
            //     setVideos(videos)
            // })
            dispatch(setLoadingOff())

        }
        fetchVideosData()


    }, [])

    const onVideoClick = async (vid) => {
        setIsAdminAddVideo(false)
        setVideo(vid)
        setOpenPopup(true)
        // console.log('%c  video:', 'color: white;background: red;', video.items[0].snippet.thumbnails.default.videoUrl);
    }

    const onAddVideo = () => {
        setIsAdminAddVideo(true)
        setOpenPopup(true)
    }

    const addVideo = async (vid) => {
        setOpenPopup(false)
        setIsAdminAddVideo(false)
        const newVideo = await fetchVideo(vid)
        setVideos([...videos, newVideo])
    }

    return (isLoading) ?
        <Loader />
        :
        <>
            <CmpHeader title="סרטוני הסבר" />
            <VideosList videos={videos} onVideoClick={onVideoClick} user={user} />
            {user?.mail &&
                <button class="float flex align-center justify-center" onClick={onAddVideo}>
                    <i class="fa fa-plus my-float"></i>
                </button>
            }

            <Popup
                title={!isAdminAddVideo ? "פרטי הסרטון" : 'הוספת סרטון'}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                {!isAdminAddVideo ?
                    <div className='video-details flex align-center column justify-center'>
                        {video && <>
                            <iframe title='video-iframe' width="560" height="315" src={`https://www.youtube.com/embed/${utilService.getYouTubeId(video.videoUrl)}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p>{video.videoName}</p>
                            <p>{video.videoDescription}</p>
                        </>
                        }
                    </div>
                    :
                    <AddVideo addVideo={addVideo} />}
            </Popup>
        </>
}

