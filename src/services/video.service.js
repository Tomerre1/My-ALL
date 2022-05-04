import { httpService } from './http.service'

export const videoService = {
    query,
    addVideo,
    removeVideo,
}

async function query() {
    const videos = await httpService.get('video/allvideos/')
    return videos
}

async function addVideo({ videoName, videoDescription, videoUrl }) {
    const updatedVideos = await httpService.post('video/addvideo/', { videoName, videoDescription, videoUrl })
    return updatedVideos
}

async function removeVideo({ videoName }) {
    const updatedVideos = await httpService.delete('video/deletevideo/', { videoName })
    return updatedVideos
}


