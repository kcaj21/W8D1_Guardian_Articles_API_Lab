import React from 'react';

const SelectedStory = ({story, addToLikedStories})=> {

    const handleClickLike = (event) => {
        event.preventDefault()
        addToLikedStories(story)


    }

    if(!story){
        return null
    }

    return (
        <>
        <a href={story.webUrl}>{story.webTitle}</a>
        <h1>Category: {story.sectionName} </h1>
        <button type='button' onClick={handleClickLike}>Like</button>
        <button type='button'>Dislike</button>
        </>
    )

}

export default SelectedStory