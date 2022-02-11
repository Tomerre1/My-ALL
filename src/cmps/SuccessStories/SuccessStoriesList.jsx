import React from 'react'
import { SuccessStoryPreview } from './SuccessStoryPreview'

export function SuccessStoriesList({ stories, removeStory, user }) {
    return (
        <div className="reviews-list">
            {stories.map((story, idx) => <SuccessStoryPreview key={idx} user={user} removeStory={removeStory} story={story} />)}
        </div>
    )
}
