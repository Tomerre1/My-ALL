import { httpService } from './http.service'

export const visitService = {
    query,
    addVisit,
    removeVisit,
    editVisit,
    updateIsDone,
}

async function query(mail) {
    const visits = await httpService.post('visit/allvisits/', { mail })
    return visits
}
async function addVisit(user, { id, content, title, date }) {
    console.log('%c  mail, id, content, title, date:', 'color: white;background: red;', { mail: user.mail, id, content, title, date });
    const updatedVisits = await httpService.post('visit/addvisit/', { mail: user.mail, id, content, title, date })
    return updatedVisits
}
async function removeVisit(visitId) {
    console.log('%c  visitId:', 'color: white;background: red;', visitId);
    const updatedtVisits = await httpService.delete('visit/deletevisit/', { id: visitId })
    return updatedtVisits
}

async function editVisit(user, { id, content, title, date }) {
    console.log('%c  mail, id, content, title, date:', 'color: white;background: red;', { mail: user.mail, id, content, title, date });
    const updatedtVisits = await httpService.put('visit/updatevisit/', { mail: user.mail, id, content, title, date })
    return updatedtVisits
}

async function updateIsDone(visitId) {
    const updatedtVisits = await httpService.post('visit/changeactive/', { id: visitId })
    return updatedtVisits
}
