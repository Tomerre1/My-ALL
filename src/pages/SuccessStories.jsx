import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SuccessStoriesList } from '../cmps/UserSuccessStoriesAndTips/SuccessStoriesList'
import Input from '../cmps/controls/Input';
import { FilterStoriesOrTips } from '../cmps/UserSuccessStoriesAndTips/FilterStoriesOrTips'
// import { loadReviews } from '../store/review.actions'
import { Popup } from '../cmps/Popup/Popup'
export function SuccessStories({ match }) {
    const user = useSelector(state => state.userReducer.user)
    const [openPopup, setOpenPopup] = useState(false)
    const [search, setSearch] = useState('')
    const [selected, setSeleceted] = useState(null)
    const [stories, setStories] = useState([
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'tomerevach@gmail.com' }, title: '1', content: ' תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() }
    ])

    const onSearch = (ev) => {
        setSearch(ev.target.value)
        console.log('%c  ev.target.value:', 'color: white;background: red;', ev.target.value);
    }
    const onSelect = (ev) => {
        setSeleceted(ev.value)
        console.log('%c  ev.value:', 'color: white;background: red;', ev.value);
    }


    return (
        <>
            <div className="success-stories-layout">
                <div className="header">
                    <div className="name">
                        <h1>{match.path.includes('success-stories') ? 'סיפורי הצלחה' : 'טיפים'}</h1>
                    </div>
                </div>
                <hr className="border" />
                <FilterStoriesOrTips
                    search={search}
                    onSearch={onSearch}
                    selected={selected}
                    onSelect={onSelect}
                />
                {stories.length > 0 && <div className="success-stories-container">
                    <SuccessStoriesList
                        stories={stories.filter(story => (story.title.includes(search) || story.content.includes(search)))}
                        user={user}
                    />
                </div>
                }
            </div>
            {user?.mail && <button class="float flex align-center justify-center" onClick={() => setOpenPopup(true)}>
                <i class="fa fa-plus my-float"></i>
            </button>}
            <Popup
                title={match.path.includes('success-stories') ? 'הוספת סיפור הצלחה' : 'הוספת טיפ'}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                {/* <AddMedicine day={selected} medicines={allmedicines} isRow={false} addMedicine={onAddMedicine} /> */}
            </Popup>
        </>
    )
}

