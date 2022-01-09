import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const timelineService = {
    query,
    moveNext
}

async function query({ mail }) {
    const timeline = await httpService.post('step/timeline/', { mail })
    return timeline
}
async function moveNext({ mail }, { levelNumber, stepNumber }, isNextLevel, nextLevel) {
    console.log('%c  mail, levelNumber, stepNumber, isNextLevel, nextLevel:', 'color: white;background: red;', mail, levelNumber, stepNumber, isNextLevel, nextLevel);
    const updatedTimeline = await httpService.post('step/next/', { mail, levelNumber, stepNumber, isNextLevel, nextLevel })
    console.log('%c  updatedTimeline:', 'color: white;background: red;', updatedTimeline);
    return updatedTimeline
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}
