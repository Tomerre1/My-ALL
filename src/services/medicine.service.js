import { httpService } from './http.service'

export const medicineService = {
    query,
    addMedicine,
    removeMedicine,
    updateMedicine,
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
    console.log('%c  medicine from medicineService:', 'color: white;background: red;', medicine);
    const updatedMedicine = await httpService.put('medicine/updatemedicine/', medicine)
    return updatedMedicine
}
