import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SuccessStoriesList } from '../cmps/SuccessStories/SuccessStoriesList.jsx'
// import { loadReviews } from '../store/review.actions'

export function SuccessStories() {

    const user = useSelector(state => state.userReducer.user)
    const stories = [{ user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() }]
    return (
        <div className="success-stories-layout">
            <div className="header">
                <div className="name">
                    <h1>סיפורי הצלחה</h1>
                </div>
            </div>
            <hr className="border" />
            {stories.length > 0 && <div className="success-stories-container">
                <SuccessStoriesList stories={stories} user={user} />
            </div>
            }
        </div>
    )
}

