import React from 'react'
import { utilService } from '../../services/util.service'
// import { Rating } from '@mui/material';
import { Avatar } from '@material-ui/core';
import { deepOrange, deepPurple } from '@mui/material/colors';

export function SuccessStoryPreview({ story, removeToyReview, user }) {
    // if (!review.toy) { return <div>Loading...</div> }
    return (
        <section className="review">
            {(user && ((user.mail === story.userMail) || user.userType === 'אדמין')) &&
                <button onClick={() => { console.log('delete') }} className="delete-review pointer">&times;</button>
            }
            <div className="review-header">
                <Avatar style={{ backgroundColor: '#ff7518' }}>{story.user.fullname[0].toUpperCase()}</Avatar>
                <p> {story.user.fullname}</p>
                {/* <Rating value={review.rating} readOnly /> */}
            </div>
            <div className="review-comment">
                <p className="toy-name">{'כותרת'}</p>
                <p> {'בלה בלה בלה'}</p>
            </div>
            <span>{utilService.makeDateWithHour(new Date())}</span>
        </section >
    )
}
