import React from 'react'
import { SuccessStoryPreview } from './SuccessStoryPreview'

export function SuccessStoriesList({ stories, removeStory, user, onRemove, onEdit }) {
    return (
        <div className="success-stories-list">
            {stories.map((story, idx) => <SuccessStoryPreview
                key={idx}
                onRemove={onRemove}
                user={user}
                removeStory={removeStory}
                onEdit={onEdit}
                story={story}
            />)}
        </div>
    )
}
