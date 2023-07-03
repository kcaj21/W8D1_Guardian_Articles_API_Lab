import React from 'react';

const SelectedStory = ({story})=> {


    if(!story){
        return null
    }

    return (
        <>
        <a href={story.webUrl}>{story.webTitle}</a>
        <h1>Category: {story.sectionName} </h1>
        </>
    )

}

export default SelectedStory