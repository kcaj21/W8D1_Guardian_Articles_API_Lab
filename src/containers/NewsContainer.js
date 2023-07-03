import React, { useState, useEffect } from 'react';


const NewsContainer = () => {
  
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);
    const [likedStories, setlikedStories] = useState([]);
    const [dislikedStories, setdislikedStories] = useState([]);



useEffect(() => {
    getStories();
}, [])

const getStories = function(){
    fetch('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
    .then(response => response.json())
    .then(stories => setStories(stories))
}

}

export default NewsContainer