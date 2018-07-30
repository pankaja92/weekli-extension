import React, { Fragment } from 'react'

const Link = () => {
    
    const getLink = () => {
        const [tab] = browser.tabs.query({currentWindow: true, active:true});
        const url =[tab];
        console.log(url);
    }

    return(
        <Fragment>
            <button onClick={getLink} type='button'>Get Link </button>
        </Fragment>
    )
}

export default Link;