import { httpService } from './http.service'

export const medicineService = {
    query,
    addMedicine,
    removeMedicine,
    updateMedicine,
    queryMedicines,
    addUserMedicineChecklist,
    removeUserMedicine,
    updateUserMedicineActive,
    resetUserMedicineForNewWeek
}

async function query() {
    const medicines = await httpService.get('medicine/allmedicines/')
    return medicines
}

async function addMedicine(medicine) {
    const newMedicine = await httpService.post('medicine/addmedicine/', medicine)
    return newMedicine
}



async function removeMedicine(medicine) {
    return await httpService.delete('medicine/deleteMedicine/', medicine)
}


async function updateMedicine(medicine) {
    const updatedMedicine = await httpService.put('medicine/updatemedicine/', medicine)
    return updatedMedicine
}


async function queryMedicines(mail) {
    const medicines = await httpService.post('medicine/getListMedicines/', { mail })
    return medicines
}
async function removeUserMedicine(medicineName, mail, day) {
    const medicines = await httpService.post('medicine/removeMedicineFromDay/', { medicineName, mail, day })
    return medicines
}
async function updateUserMedicineActive(medicineName, mail, day) {
    const medicines = await httpService.post('medicine/changeActive/', { medicineName, mail, day })
    return medicines
}

async function addUserMedicineChecklist({ medicineName, count }, mail, day) {
    const medicines = await httpService.post('medicine/addMedicineForDay/', { medicineName, count, mail, day })
    return medicines
}
async function resetUserMedicineForNewWeek(mail) {
    const medicines = await httpService.post('medicine/restartMedicineList/', { mail })
    return medicines
}

