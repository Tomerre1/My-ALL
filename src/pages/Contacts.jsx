import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ContactsList } from '../cmps/Contacts/ContactsList'
import { AddContact } from '../cmps/Contacts/AddContact'
import { Popup } from '../cmps/Popup/Popup'
import { CmpHeader } from '../cmps/Header/CmpHeader'
import { contactService } from '../services/contact.service'
import { Loader } from '../cmps/Loader/Loader'
import { setLoadingOn, setLoadingOff } from '../store/system.actions'

export function Contacts() {
    const user = useSelector(state => state.userReducer.user)
    const isLoading = useSelector(state => state.systemReducer.isLoading)
    const [openPopup, setOpenPopup] = useState(false)
    const [editContact, setEditContact] = useState(null)
    const [myContacts, setMyContacts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchContacts() {
            dispatch(setLoadingOn())
            const queryContacts = await contactService.query(user)
            setMyContacts(queryContacts)
            dispatch(setLoadingOff())
        }
        fetchContacts()
    }, [])

    useEffect(() => {
        if (!openPopup) {
            setEditContact(null)
        }
    }, [openPopup])

    const onRemoveContact = async (contactId) => {
        const updatedContacts = myContacts.filter(contact => contact.id !== contactId)
        setMyContacts(updatedContacts)
        await contactService.removeContact(contactId)

    }

    const onEditContact = (contactId) => {
        const contact = myContacts.find(contact => contact.id === contactId)
        setEditContact(contact)
        setOpenPopup(true)
    }

    const saveEditContact = async (contact) => {
        const updatedContacts = myContacts.map(currContact => currContact.id === contact.id ? contact : currContact)
        setMyContacts(updatedContacts)
        setEditContact(null)
        setOpenPopup(false)
        await contactService.editContact(user, contact)
    }

    const onAddContact = async (contact) => {
        setMyContacts([...myContacts, contact])
        setOpenPopup(false)
        await contactService.addContact(user, contact)
    }

    return (isLoading) ?
        <Loader />
        :
        <>
            <CmpHeader title='אנשי קשר' />
            {myContacts.length > 0 && <div className="contacts-container">
                <ContactsList contacts={myContacts} user={user} onEditContact={onEditContact} onRemoveContact={onRemoveContact} />
            </div>
            }
            <button class="float flex align-center justify-center" onClick={() => setOpenPopup(true)}>
                <i class="fa fa-plus my-float"></i>
            </button>
            <Popup
                title={'הוספת איש קשר'}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <AddContact user={user} onAddContact={onAddContact} editContact={editContact} saveEditContact={saveEditContact} />
            </Popup>
        </>

}

