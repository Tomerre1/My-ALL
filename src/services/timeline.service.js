import { httpService } from './http.service'

export const timelineService = {
    query,
    moveNext,
    moveBack,
    changeDates,
    queryAdmin,
    removeLevel,
    removeStep,
    // addLevel,
    // addStep,
    // updateLevel,
    // updateStep,
}

async function query({ mail }) {
    const timeline = await httpService.post('step/timeline/', { mail })
    return timeline
}

async function queryAdmin() {
    const timeline = await httpService.get('level/protocol/')
    return timeline
}

async function removeLevel({ levelNumber }) {
    const timeline = await httpService.delete('deleteLevel/', { levelNumber })
    return timeline
}
async function removeStep({ levelNumber, stepNumber }) {
    const timeline = await httpService.delete('deleteLevel/', { levelNumber, stepNumber })
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
    const updatedTimeline = await httpService.post('step/delaysteps/', { mail, date })
    return updatedTimeline
}


