import React from 'react';

const SelectedStory = ({story, addToLikedStories, addToDislikedStories})=> {

    const handleClickLike = (event) => {
        event.preventDefault()
        addToLikedStories(story)



    }

    const handleClickDislike = (event) => {
        event.preventDefault()
        addToDislikedStories(story)


    }

    if(!story){
        return null
    }

    return (
        <>
        <a href={story.webUrl} target="_blank" rel="noopener noreferrer">{story.webTitle}</a>
        <h4>Category: {story.sectionName} </h4>
        <div class='button-group'>
        <button class='LikeButton' type='button' onClick={handleClickLike}>Like</button>
        <button class='DislikeButton' type='button' onClick={handleClickDislike}>Dislike</button>
        </div>
        </>

    )

}

export default SelectedStory