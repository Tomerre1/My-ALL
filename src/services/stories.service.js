import { httpService } from './http.service'

export const storiesService = {
    query,
    addStory,
    removeStory,
    editStory
}

async function query() {
    const stories = await httpService.get('successStories/allsuccessStories/')
    return stories
}
async function addStory({ user, id, content, title, date }) {
    const updatedtStories = await httpService.post('successStories/addsuccessStory/', { mail: user.mail, id, content, title, date })
    return updatedtStories
}
async function removeStory(storyId) {
    const updatedtStories = await httpService.delete('successStories/deletesuccessStory/', { id: storyId })
    return updatedtStories
}

async function editStory({ user, id, content, title, date }) {
    const updatedtStories = await httpService.put('successStories/updatesuccessStory/', { mail: user.mail, id, content, title, date })
    return updatedtStories
}
