import React, { useState, useEffect } from 'react';
import "./Media/Css/Feed.css"

import StarHalfIcon from '@material-ui/icons/StarHalf';
import Tweetbox from './Tweetbox';
import Post from './Post'
import db from './Firebase';
import FlipMove from "react-flip-move"





function Feed() {
    const [posts, setposts] = useState([]);


    useEffect(() => {
        db.collection('posts').onSnapshot(Snapshot => (
            setposts(Snapshot.docs.map(doc => doc.data()))
        )
        )



    }, [])
    return (
        <div className="feedSection">
            {/* Header */}
            <div className="feedHeader" >
                <h3>Home</h3>
                <StarHalfIcon fontSize="medium" color="primary" />

            </div>
            {/* Tweet Box */}
            <Tweetbox />
            <FlipMove>
                <div>
                    {
                        posts.map(posts => (
                            <Post
                                key={posts.statement}
                                name={posts.name}
                                id={posts.id}
                                url={posts.url}
                                statement={posts.statement}
                            />

                        ))
                    }
                </div>
            </FlipMove>







            {/* Posts */}
        </div>
    )
}

export default Feed
