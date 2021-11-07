
import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const STORAGE_KEY = 'order'

export const orderService = {
    query,
    save,
    remove
}

function query() {
    return storageService.query(STORAGE_KEY)
}


function save(order) {
    if (order._id) {
        // update
        return storageService.put(STORAGE_KEY, order)
    } else {
        // create
        order._id = utilService.makeId()
        return storageService.post(STORAGE_KEY, order)
    }
}


function remove(orderId) {
    return storageService.remove(STORAGE_KEY, orderId)
}

