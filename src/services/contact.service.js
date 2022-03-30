import { httpService } from './http.service'

export const contactService = {
    query,
    addContact,
    removeContact,
    editContact
}

async function query({ mail }) {
    const contacts = await httpService.post('contact/allcontacts/', { mailUser: mail })
    return contacts
}

async function addContact(user, { name, mail, id, phone, img, job }) {
    const updatedContacts = await httpService.post('contact/addcontact/', { mailUser: user.mail, id, name, mail, phone, img, job })
    return updatedContacts
}

async function removeContact(contactId) {
    const updatedContacts = await httpService.delete('contact/deletecontact/', { id: contactId })
    return updatedContacts
}

async function editContact(user, { name, mail, id, phone, img, job }) {
    const updatedContacts = await httpService.put('contact/updatecontact/', { mailUser: user.mail, id, name, mail, phone, img, job })
    return updatedContacts
}
