import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SuccessStoriesList } from '../cmps/UserSuccessStoriesAndTips/SuccessStoriesList'
import { FilterStoriesOrTips } from '../cmps/UserSuccessStoriesAndTips/FilterStoriesOrTips'
import { Popup } from '../cmps/Popup/Popup'
import { utilService } from '../services/util.service'
import { AddStoryOrTip } from '../cmps/UserSuccessStoriesAndTips/AddStoryOrTip'
import { CmpHeader } from '../cmps/Header/CmpHeader'
import { storiesService } from '../services/stories.service.js'
import { tipsService } from '../services/tips.service.js'
import { Loader } from '../cmps/Loader/Loader'
import { setLoadingOn, setLoadingOff } from '../store/system.actions'

export function SuccessStories({ match }) {
    const user = useSelector(state => state.userReducer.user)
    const isLoading = useSelector(state => state.systemReducer.isLoading)
    const dispatch = useDispatch()
    const [openPopup, setOpenPopup] = useState(false)
    const [search, setSearch] = useState('')
    const [selected, setSeleceted] = useState('')
    const [editItem, setEditItem] = useState(null)
    const isStory = match.path.includes('success-stories') ? true : false
    const [stories, setStories] = useState([])

    useEffect(() => {
        dispatch(setLoadingOn())
        async function fetchStories() {
            const queryStories = await storiesService.query()
            setStories(queryStories)
            dispatch(setLoadingOff())
        }
        async function fetchTips() {
            const queryStories = await tipsService.query()
            setStories(queryStories)
            dispatch(setLoadingOff())
        }
        (isStory) ? fetchStories() : fetchTips()
    }, [])

    useEffect(() => {
        if (!openPopup) {
            setEditItem(null)
        }
    }, [openPopup])

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

    const onRemove = async (itemId) => {
        setStories(stories.filter(story => story.id !== itemId));
        (isStory) ? await storiesService.removeStory(itemId) : await tipsService.removeTip(itemId)
    }

    const onEditItem = (item) => {
        setEditItem(item)
        setOpenPopup(true)
    }

    const onAddItem = async (item) => {
        setStories([...stories, item]);
        setOpenPopup(false);
        (isStory) ? await storiesService.addStory(item) : await tipsService.addTip(item)
    }

    const saveEditItem = async (item) => {
        const updatedItems = stories.map(currItem => currItem.id === item.id ? item : currItem)
        setStories(updatedItems)
        setEditItem(null)
        setOpenPopup(false);
        (isStory) ? await storiesService.editStory(item) : await tipsService.editTip(item)
    }

    return (isLoading) ?
        <Loader />
        :
        <>
            <div className="success-stories">
                <CmpHeader title={match.path.includes('success-stories') ? 'סיפורי הצלחה' : 'טיפים'} />
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
                    isStory={isStory}
                />
            </Popup>
        </>
}

