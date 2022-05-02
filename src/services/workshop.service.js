import { httpService } from './http.service'

export const workshopService = {
    query,
    addWorkshop,
    removeWorkshop,
    editWorkshop,
    updateIsDone,
}

async function query(mail) {
    const workshops = await httpService.post('workshop/allworkshops/', { mail })
    return workshops
}
async function addWorkshop(user, { id, content, title, date, lecturer }) {
    const updatedWorkshops = await httpService.post('workshop/addworkshop/', { mail: user.mail, id, content, title, date, lecturer })
    return updatedWorkshops
}
async function removeWorkshop(visitId) {
    const updatedWorkshops = await httpService.delete('workshop/deleteworkshop/', { id: visitId })
    return updatedWorkshops
}

async function editWorkshop(user, { id, content, title, date, lecturer }) {
    const updatedWorkshops = await httpService.put('workshop/updateworkshop/', { mail: user.mail, id, content, title, date, lecturer })
    return updatedWorkshops
}

async function updateIsDone(visitId) {
    const updatedtVisits = await httpService.post('workshop/changeactive/', { id: visitId })
    return updatedtVisits
}
