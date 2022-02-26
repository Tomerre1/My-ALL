import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactsList({ contacts, onRemoveContact, onEditContact, user }) {
    return (
        <div className="contacts-list">
            {contacts?.map((contact, idx) => <ContactPreview
                key={idx}
                onEditContact={onEditContact}
                onRemoveContact={onRemoveContact}
                user={user}
                contact={contact}
            />)}
        </div>
    )
}

