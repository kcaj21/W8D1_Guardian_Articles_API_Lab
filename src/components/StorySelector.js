import React from 'react';

const StorySelector = ({stories, onStorySelected}) => {

    const handleChange = (event) => {
        onStorySelected(event.target.value)
    }

    const storiesList = stories.map((story) => {
        
        return (
            <option key ={story.webPublicationDate} value={story.webPublicationDate}>{story.webTitle}</option>

        )
    })

    return (
        <div>
            <select class='Selector' onChange={handleChange}>
            {storiesList}
        
            </select>
        </div>
    )
}

export default StorySelector
