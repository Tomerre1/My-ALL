import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactsList({ contacts, onAddContact, onRemoveContact, onEditContact, user }) {
    return (
        <div className="contacts-list">
            {contacts.map((contact, idx) => <ContactPreview key={idx} user={user} contact={contact} />)}
        </div>
    )
}

