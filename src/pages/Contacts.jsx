import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ContactsList } from '../cmps/Contacts/ContactsList'
import { AddContact } from '../cmps/Contacts/AddContact'
import { Popup } from '../cmps/Popup/Popup'
import { CmpHeader } from '../cmps/Header/CmpHeader'

export function Contacts() {
    const user = useSelector(state => state.userReducer.user)
    const [openPopup, setOpenPopup] = useState(false)
    const [editContact, setEditContact] = useState(null)
    const [myContacts, setMyContacts] = useState([
        {
            name: 'תומר רווח',
            phone: '0503031330',
            job: 'רופא',
            mail: 'tomer@gmail.com',
            img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
            id: '3'

        },
        {
            name: 'תומר רווח',
            phone: '0503031330',
            mail: 'tomer@gmail.com',
            job: 'אח',
            img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
            id: '4'

        }
    ])

    useEffect(() => {
        if (!openPopup) {
            setEditContact(null)
        }
    }, [openPopup])

    const onRemoveContact = (contactId) => {
        const updatedContacts = myContacts.filter(contact => contact.id !== contactId)
        setMyContacts(updatedContacts)
    }

    const onEditContact = (contactId) => {
        const contact = myContacts.find(contact => contact.id === contactId)
        setEditContact(contact)
        setOpenPopup(true)
    }

    const saveEditContact = (contact) => {
        const updatedContacts = myContacts.map(currContact => currContact.id === contact.id ? contact : currContact)
        setMyContacts(updatedContacts)
        setEditContact(null)
        setOpenPopup(false)
    }

    const onAddContact = (contact) => {
        setMyContacts([...myContacts, contact])
        setOpenPopup(false)
    }

    return (
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
    )
}

