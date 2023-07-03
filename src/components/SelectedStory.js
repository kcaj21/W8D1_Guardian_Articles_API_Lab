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
        <a href={story.webUrl}>{story.webTitle}</a>
        <h4>Category: {story.sectionName} </h4>
        <button class='LikeButton' type='button' onClick={handleClickLike}>Like</button>
        <button class='DislikeButton' type='button' onClick={handleClickDislike}>Dislike</button>
        </>
    )

}

export default SelectedStory