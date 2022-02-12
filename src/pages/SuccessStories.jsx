import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SuccessStoriesList } from '../cmps/SuccessStories/SuccessStoriesList.jsx'
// import { loadReviews } from '../store/review.actions'
import { Popup } from '../cmps/Popup/Popup'
export function SuccessStories({ match }) {

    const user = useSelector(state => state.userReducer.user)
    const [openPopup, setOpenPopup] = useState(false);
    const stories = [{ user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'tomerevach@gmail.com' }, title: 'כותרת', content: ' תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
    { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() }]
    return (
        <>
            <div className="success-stories-layout">
                <div className="header">
                    <div className="name">
                        <h1>{match.path.includes('success-stories') ? 'סיפורי הצלחה' : 'טיפים'}</h1>
                    </div>
                </div>
                <hr className="border" />
                {stories.length > 0 && <div className="success-stories-container">
                    <SuccessStoriesList stories={stories} user={user} />
                </div>
                }
            </div>
            <button class="float flex align-center justify-center" onClick={() => setOpenPopup(true)}>
                <i class="fa fa-plus my-float"></i>
            </button>
            <Popup
                title={'הוספת תרופה'}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                {/* <AddMedicine day={selected} medicines={allmedicines} isRow={false} addMedicine={onAddMedicine} /> */}
            </Popup>
        </>
    )
}

