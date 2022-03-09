import { httpService } from './http.service'

export const timelineService = {
    query,
    moveNext,
    moveBack,
    changeDates
}

async function query({ mail }) {
    const timeline = await httpService.post('step/timeline/', { mail })
    return timeline
}
async function moveNext({ mail }, { levelNumber, stepNumber }, isNextLevel, nextLevel) {
    const updatedTimeline = await httpService.post('step/next/', { mail, levelNumber, stepNumber, isNextLevel, nextLevel })
    return updatedTimeline
}
async function moveBack({ mail }, { levelNumber, stepNumber }, isBackLevel, backLevel) {
    const updatedTimeline = await httpService.post('step/back/', { mail, levelNumber, stepNumber, isBackLevel, backLevel })
    return updatedTimeline
}

async function changeDates({ mail }, date) {
    console.log('%c  { mail }, date:', 'color: white;background: red;', { mail }, date);
    const updatedTimeline = await httpService.post('step/delaysteps/', { mail, date })
    return updatedTimeline
}


