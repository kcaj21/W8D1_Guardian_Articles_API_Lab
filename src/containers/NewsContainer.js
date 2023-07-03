import React, { useState, useEffect } from 'react';
import StorySelector from '../components/StorySelector';
import SelectedStory from '../components/SelectedStory'


const NewsContainer = () => {
  
    const [stories, setStories] = useState([]);
    const [selectedStoryWebPublicationDate, setSelectedStory] = useState(null);
    // const [likedStories, setlikedStories] = useState([]);
    // const [dislikedStories, setdislikedStories] = useState([]);



useEffect(() => {
    getStories();
}, [])

const handleStorySelected = webPublicationDate  => {
    setSelectedStory(webPublicationDate)
  
}

const selectedStory = stories.find(story => story.webPublicationDate === selectedStoryWebPublicationDate
    )

const getStories = function(){
    fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
    .then(response => response.json())
    .then(stories => setStories(stories.response.results))
}

    return (
        <>
        <h1>This is a container</h1>
        <StorySelector stories={stories} onStorySelected={handleStorySelected}/>
        <SelectedStory story={selectedStory}/>
        </>
    )

}

export default NewsContainer