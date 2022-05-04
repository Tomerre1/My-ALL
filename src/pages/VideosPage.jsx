import React, { useState, useEffect } from 'react'
import { Popup } from '../cmps/Popup/Popup.jsx'
import { utilService } from '../services/util.service'
import { VideosList } from '../cmps/UserVideos/VideosList'
import { AddVideo } from '../cmps/UserVideos/AddVideo'
import { useSelector, useDispatch } from 'react-redux'
import { CmpHeader } from '../cmps/Header/CmpHeader'
import { Loader } from '../cmps/Loader/Loader'
import { setLoadingOn, setLoadingOff } from '../store/system.actions'
import { videoService } from '../services/video.service.js'
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
            const videos = await videoService.query()
            const videosWithDuration = videos.map(async (currVideo) => {
                const video = await fetchVideo(currVideo)
                return video
            })
            Promise.all(videosWithDuration).then(videos => {
                setVideos(videos)
            })
            dispatch(setLoadingOff())

        }
        fetchVideosData()

    }, [])

    const onVideoClick = async (vid) => {
        setIsAdminAddVideo(false)
        setVideo(vid)
        setOpenPopup(true)
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
        await videoService.addVideo(vid)
    }
    const onRemoveVideo = async (vid) => {
        const videosAfterRemove = videos.filter(video => video.videoName !== vid.videoName)
        setVideos(videosAfterRemove)
        await videoService.removeVideo(vid)
    }

    return (isLoading) ?
        <Loader />
        :
        <>
            <CmpHeader title="סרטוני הסבר" />
            <VideosList videos={videos} onVideoClick={onVideoClick} onRemoveVideo={onRemoveVideo} user={user} />
            {user?.mail && user?.userType === 'אדמין' &&
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

