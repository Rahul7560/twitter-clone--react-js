import React from 'react'
import "./Media/Css/Widget.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';


function Widget() {
    return (
        <div className="widgetMain"  >
            <div className="widgetSearch">
                <SearchIcon className="iconSearchWidget" />
                <input placeholder=" Search Tweets" />




            </div>
            <div className="Tweetembed  " >
                <TwitterTweetEmbed
                    tweetId={'933354946111705097'}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{ height: 400 }}
                />

            </div>


        </div>
    )
}

export default Widget
