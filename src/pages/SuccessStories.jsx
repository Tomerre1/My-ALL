import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SuccessStoriesList } from '../cmps/SuccessStories/SuccessStoriesList.jsx'
// import { loadReviews } from '../store/review.actions'

export function SuccessStories() {
    // async componentDidMount() {
    //     await this.props.loadReviews({})
    // }
    const user = useSelector(state => state.userReducer.user)
    const stories = [{ user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', comment: 'תגובה תגובה תגובה', date: new Date() }]
    return (
        <div className="success-stories-layout">
            <div className="header">
                <div className="name">
                    <p>סיפורי הצלחה</p>
                </div>
            </div>
            <hr className="border" />
            {/* <div className="card__insights">
                <div className="card__heading">
                    <div className="heading">Store Reviews</div>
                </div>
            </div> */}
            {stories.length > 0 && <div className="success-stories-container">
                <SuccessStoriesList stories={stories} user={user} />
            </div>
            }
        </div>
    )
}

