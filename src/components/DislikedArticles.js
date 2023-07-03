import React from 'react';
import CurrentStory from '../components/CurrentStory';


const DislikedArticles = ({dislikedStories}) => {

    const dislikedArticlesList = dislikedStories.map((story, index) => {

        return <CurrentStory key={index} story={story}/>
    })

    return (

    <div>
        <h3>Disliked Articles: </h3>
            <ul>
            {dislikedArticlesList}
            </ul>
    </div>
    )

}

export default DislikedArticles