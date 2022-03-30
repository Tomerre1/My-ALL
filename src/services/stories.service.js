import { httpService } from './http.service'

export const storiesService = {
    query,
    addStory,
    removeStory,
    editStory
}

async function query() {
    const stories = await httpService.post('step/allsuccessStories/')
    return stories
}
async function addStory({ mail }, { levelNumber, stepNumber }, isNextLevel, nextLevel) {
    const updatedTimeline = await httpService.post('step/next/', { mail, levelNumber, stepNumber, isNextLevel, nextLevel })
    return updatedTimeline
}
async function removeStory({ mail }, { levelNumber, stepNumber }, isBackLevel, backLevel) {
    const updatedTimeline = await httpService.post('step/back/', { mail, levelNumber, stepNumber, isBackLevel, backLevel })
    return updatedTimeline
}

async function editStory({ mail }, date) {
    console.log('%c  { mail }, date:', 'color: white;background: red;', { mail }, date);
    const updatedTimeline = await httpService.post('step/delaysteps/', { mail, date })
    return updatedTimeline
}
