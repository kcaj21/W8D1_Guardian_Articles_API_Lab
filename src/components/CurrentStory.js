import React from "react";

const CurrentStory = ({story}) => {

    return(

        <li key={story.webPublicationDate}>{story.webTitle}</li>
    )
}

export default CurrentStory







