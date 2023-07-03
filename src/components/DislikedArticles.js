import React from 'react';
import CurrentStory from '../components/CurrentStory';


const DislikedArticles = ({dislikedStories}) => {

    const dislikedArticlesList = dislikedStories.map((story, index) => {

        return <CurrentStory key={index} story={story}/>
    })

    return (

    <div>
        <h1>Disliked Articles: </h1>
            <ul>
            {dislikedArticlesList}
            </ul>
    </div>
    )

}

export default DislikedArticles