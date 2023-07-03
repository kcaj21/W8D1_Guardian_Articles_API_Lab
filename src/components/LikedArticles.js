import React from 'react';
import CurrentStory from '../components/CurrentStory';


const LikedArticles = ({likedStories}) => {

    const likedArticlesList = likedStories.map((story, index) => {

        return <CurrentStory key={index} story={story}/>
    })

    return (

    <div>
        <h2>Liked Articles: </h2>
            <ul>
            {likedArticlesList}
            </ul>
    </div>
    )

}

export default LikedArticles
