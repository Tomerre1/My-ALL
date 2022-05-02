import { httpService } from './http.service'

export const timelineService = {
    query,
    moveNext,
    moveBack,
    changeDates,
    queryAdmin,
    removeLevel,
    removeStep,
    addLevel,
    addStep,
    updateLevel,
    updateStep,
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
    const timeline = await httpService.delete('level/deleteLevel/', { levelNumber: levelNumber[0] })
    return timeline
}

async function removeStep({ levelNumber, stepNumber }) {
    const timeline = await httpService.delete('step/deleteStep/', { levelNumber: levelNumber[0], stepNumber })
    return timeline
}

async function addLevel(level) {
    const timeline = await httpService.post('level/InsertLevel/', { description: level.description, levelNumber: level.levelNumber[0] })
    return timeline
}

async function addStep(step) {
    const timeline = await httpService.post('step/InsertStep/', { ...step, levelNumber: step.levelNumber[0] })
    return timeline
}

async function updateLevel(level) {
    const timeline = await httpService.put('level/updateLevel/', {
        description: level.description,
        levelNumber: level.levelNumber[0],
    })
    return timeline
}

async function updateStep(step) {
    const timeline = await httpService.put('step/updateStep/', { ...step, levelNumber: step.levelNumber[0] })
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


