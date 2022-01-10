import { httpService } from './http.service'

export const timelineService = {
    query,
    moveNext,
    moveBack
}

async function query({ mail }) {
    const timeline = await httpService.post('step/timeline/', { mail })
    return timeline
}
async function moveNext({ mail }, { levelNumber, stepNumber }, isNextLevel, nextLevel) {
    console.log('%c moveNext: mail, levelNumber, stepNumber, isNextLevel, nextLevel:', 'color: white;background: red;', mail, levelNumber, stepNumber, isNextLevel, nextLevel);
    const updatedTimeline = await httpService.post('step/next/', { mail, levelNumber, stepNumber, isNextLevel, nextLevel })
    console.log('%c  updatedTimeline:', 'color: white;background: red;', updatedTimeline);
    return updatedTimeline
}
async function moveBack({ mail }, { levelNumber, stepNumber }, isBackLevel, backLevel) {
    console.log('%c moveBack:  { mail }, { levelNumber, stepNumber }, isBackLevel, backLevel:', 'color: white;background: red;', mail, levelNumber, stepNumber, isBackLevel, backLevel);
    const updatedTimeline = await httpService.post('step/back/', { mail, levelNumber, stepNumber, isBackLevel, backLevel })
    return updatedTimeline
}
