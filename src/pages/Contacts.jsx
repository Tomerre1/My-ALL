import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ContactsList } from '../cmps/Contacts/ContactsList'
import { AddContact } from '../cmps/Contacts/AddContact'
// import { loadReviews } from '../store/review.actions'
import { Popup } from '../cmps/Popup/Popup'
export function Contacts() {
    const user = useSelector(state => state.userReducer.user)
    const [openPopup, setOpenPopup] = useState(false);
    const myContacts = [
        {
            name: 'תומר רווח',
            phone: '0503031330',
            mail: 'tomer@gmail.com',
            img: "https://res.cloudinary.com/dusakec3z/image/upload/v1644704225/e4v13fzjwjexvdkvyp8c.png"
        },
        {
            name: 'תומר רווח',
            phone: '0503031330',
            mail: 'tomer@gmail.com',
            img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        }, {
            name: 'תומר רווח',
            phone: '0503031330',
            mail: 'tomer@gmail.com',
            img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        }, {
            name: 'תומר רווח',
            phone: '0503031330',
            mail: 'tomer@gmail.com',
            img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        }, {
            name: 'תומר רווח',
            phone: '0503031330',
            mail: 'tomer@gmail.com',
            img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        }, {
            name: 'תומר רווח',
            phone: '0503031330',
            mail: 'tomer@gmail.com',
            img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        }
    ]
    return (
        <>
            <div className="success-stories-layout">
                <div className="header">
                    <div className="name">
                        <h1>אנשי קשר</h1>
                    </div>
                </div>
                <hr className="border" />
                {myContacts.length > 0 && <div className="contacts-container">
                    <ContactsList contacts={myContacts} user={user} />
                </div>
                }
            </div>
            <button class="float flex align-center justify-center" onClick={() => setOpenPopup(true)}>
                <i class="fa fa-plus my-float"></i>
            </button>
            <Popup
                title={'הוספת איש קשר'}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <AddContact user={user} />
            </Popup>
        </>
    )
}

