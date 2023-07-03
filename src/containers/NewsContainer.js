import React, { useState, useEffect } from 'react';
import StorySelector from '../components/StorySelector';
import SelectedStory from '../components/SelectedStory';
import LikedArticles from '../components/LikedArticles';
import DislikedArticles from '../components/DislikedArticles';


const NewsContainer = () => {
  
    const [stories, setStories] = useState([]);
    const [selectedStoryWebPublicationDate, setSelectedStory] = useState(null);
    const [likedStories, setlikedStories] = useState([]);
    const [dislikedStories, setdislikedStories] = useState([]);



useEffect(() => {
    getStories();
}, [])

const handleStorySelected = webPublicationDate  => {
    setSelectedStory(webPublicationDate)
}


const selectedStory = stories.find(story => story.webPublicationDate === selectedStoryWebPublicationDate)

const addLikedStory = (selectedStory) => {
    const newLikeList = [...likedStories, selectedStory]
    const uniqueLikes = [...new Set(newLikeList)]
    setlikedStories(uniqueLikes)
    const newDislikeList = [...dislikedStories]
    if (newDislikeList.includes(selectedStory)) {

    const filteredList = newDislikeList.filter((story) => {
       return story.webTitle !== selectedStory.webTitle
    })
    setdislikedStories(filteredList);
    }
};

const addDislikedStory = (selectedStory) => {
    const newDislikeList = [...dislikedStories, selectedStory]
    const uniqueDislikes = [...new Set(newDislikeList)]
    setdislikedStories(uniqueDislikes)
    const newLikeList = [...likedStories]

    if (newLikeList.includes(selectedStory)) {

        const filteredList = newLikeList.filter((story) => {
           return story.webTitle !== selectedStory.webTitle
        })
        setlikedStories(filteredList);
        }
};


const getStories = function(){
    fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
    .then(response => response.json())
    .then(stories => setStories(stories.response.results))
}

    return (
        <>
        <h1>This is a container</h1>
        <StorySelector stories={stories} onStorySelected={handleStorySelected}/>
        <SelectedStory story={selectedStory} addToLikedStories={addLikedStory} addToDislikedStories={addDislikedStory}/>
        <LikedArticles likedStories={likedStories}/>
        <DislikedArticles dislikedStories={dislikedStories}/>
        </>
    )

}

export default NewsContainer