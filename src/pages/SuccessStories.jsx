import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SuccessStoriesList } from '../cmps/SuccessStories/SuccessStoriesList.jsx'
// import { loadReviews } from '../store/review.actions'

export function SuccessStories() {
    // async componentDidMount() {
    //     await this.props.loadReviews({})
    // }
    const user = useSelector(state => state.userReducer.user)
    const stories = [{ userMail: '', user: { fullname: 'תומר רווח', userType: 'מטופל', userMail: 'revahtomer@gmail.com' }, title: 'כותרת', comment: 'תגובה תגובה תגובה', date: new Date() }]
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__name">
                    <p>סיפורי הצלחה:</p>
                </div>
            </div>
            <hr className="border" />
            <div className="card__insights">
                <div className="card__heading">
                    <div className="heading">Store Reviews</div>
                </div>
            </div>
            <div className="insights">
                {stories.length > 0 && <div className="reviews-container">
                    <SuccessStoriesList stories={stories} user={user} />
                </div>
                }
            </div>
        </div>
    )
}

