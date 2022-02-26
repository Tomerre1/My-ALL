import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export function ContactPreview({ user, contact, onEditContact, onRemoveContact }) {
    return (
        <div className="contact">
            <div className="top">
                <img src={contact.img} alt="avatar_img" className="circle-img" />
                <div>
                    <div className="actions">
                        <button onClick={() => onEditContact(contact.id)}><EditIcon /></button>
                        <button onClick={() => onRemoveContact(contact.id)}><DeleteIcon /></button>
                    </div>
                    <h2 className="name">{contact.name}</h2>
                </div>
            </div>
            <div className="bottom">
                <p className="info">{contact.phone} :פלאפון</p>
                <p className="info">{contact.mail} :אימייל</p>
            </div>
        </div>

    )
}
