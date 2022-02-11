import React from 'react'
import { utilService } from '../../services/util.service'
import { Avatar } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export function SuccessStoryPreview({ story, removeToyReview, user }) {
    console.log('%c  story:', 'color: white;background: red;', story);
    console.log('%c  user:', 'color: white;background: red;', user);
    return (
        <section className="success-story">
            {(user && ((user.mail === story.user.mail) || user.userType === 'אדמין')) &&
                <div className="success-story-header">
                    <Avatar style={{ backgroundColor: '#ff7518' }}>{story.user.fullname[0].toUpperCase()}</Avatar>
                    <div className="actions">
                        <button onClick={() => { console.log('edit') }} ><EditIcon /></button>
                        <button onClick={() => { console.log('delete') }} ><DeleteIcon /></button>
                    </div>
                </div>
            }

            <div className="success-story-comment">
                <p className="title">{'כותרת'}</p>
                <p className="content"> {'בלה בלה בלה'}</p>
            </div>

            <span>{utilService.makeDateWithHour(story.date)}</span>
        </section >
    )
}
