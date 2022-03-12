import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SuccessStoriesList } from '../cmps/UserSuccessStoriesAndTips/SuccessStoriesList'
import { FilterStoriesOrTips } from '../cmps/UserSuccessStoriesAndTips/FilterStoriesOrTips'
import { Popup } from '../cmps/Popup/Popup'
import { utilService } from '../services/util.service'
export function SuccessStories({ match }) {
    const user = useSelector(state => state.userReducer.user)
    const [openPopup, setOpenPopup] = useState(false)
    const [search, setSearch] = useState('')
    const [selected, setSeleceted] = useState('all')
    const [stories, setStories] = useState([
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: '2', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'tomerevach@gmail.com' }, title: '1', content: ' תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: '3', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() }
    ])

    const sortStories = (sortedStories) => {
        if (selected === 'date') {
            return utilService.sortByDate(sortedStories)
        } else if (selected === 'name') {
            return utilService.sortByName(sortedStories)
        }
        return sortedStories
    }

    const getStories = () => {
        const afterSearchStories = stories.filter(story => (story.title.includes(search) || story.content.includes(search)))
        const sortedStories = sortStories(afterSearchStories)
        return sortedStories
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
                    setSearch={setSearch}
                    selected={selected}
                    setSeleceted={setSeleceted}
                />
                {getStories().length > 0 && <div className="success-stories-container">
                    <SuccessStoriesList
                        stories={getStories()}
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

