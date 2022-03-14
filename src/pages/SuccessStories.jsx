import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SuccessStoriesList } from '../cmps/UserSuccessStoriesAndTips/SuccessStoriesList'
import { FilterStoriesOrTips } from '../cmps/UserSuccessStoriesAndTips/FilterStoriesOrTips'
import { Popup } from '../cmps/Popup/Popup'
import { utilService } from '../services/util.service'
import { AddStoryOrTip } from '../cmps/UserSuccessStoriesAndTips/AddStoryOrTip'
export function SuccessStories({ match }) {
    const user = useSelector(state => state.userReducer.user)
    const [openPopup, setOpenPopup] = useState(false)
    const [search, setSearch] = useState('')
    const [selected, setSeleceted] = useState('')
    const [editItem, setEditItem] = useState(null)
    const [stories, setStories] = useState([
        { id: 1, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: '2', content: 'תגובה תגובה תגובה', date: new Date() },
        { id: 2, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'tomerevach@gmail.com' }, title: '1', content: ' תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { id: 3, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: '3', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { id: 4, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { id: 5, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { id: 6, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה תגובה', date: new Date() },
        { id: 7, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { id: 8, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { id: 9, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { id: 10, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() },
        { id: 11, user: { fullname: 'תומר רווח', userType: 'מטופל', mail: 'revahtomer@gmail.com' }, title: 'כותרת', content: 'תגובה תגובה תגובה', date: new Date() }
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

    const onRemove = (itemId) => {
        setStories(stories.filter(story => story.id !== itemId))
    }

    const onEditItem = (item) => {
        setEditItem(item)
        setOpenPopup(true)
    }

    const onAddItem = (item) => {
        setStories([...stories, item])
        setOpenPopup(false)
    }

    const saveEditItem = (item) => {
        const updatedItems = stories.map(currItem => currItem.id === item.id ? item : currItem)
        setStories(updatedItems)
        setEditItem(null)
        setOpenPopup(false)
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
                        onRemove={onRemove}
                        onEdit={onEditItem}
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
                <AddStoryOrTip
                    user={user}
                    editItem={editItem}
                    saveEditItem={saveEditItem}
                    onAddItem={onAddItem}
                    isStory={match.path.includes('success-stories') ? true : false}
                />
            </Popup>
        </>
    )
}

