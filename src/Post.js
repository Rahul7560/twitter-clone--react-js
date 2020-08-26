import React from 'react'
import './Media/Css/Post.css';
import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


function Post(probs) {
    return (
        <div className="postMainDiv">
            <div className="postFirstDiv">
                <div className="firstAvatar" >
                    <Avatar src="https://i.pinimg.com/originals/a1/e8/38/a1e83862a0f7e6c5129d7baf137023c0.png" />
                </div>
                <div className="firstPost" >

                    <h3 className="postAuthorName"> {probs.name} <span>.    @{probs.id}</span>
                    </h3>
                    <p className="postStatement "> {probs.statement}

                    </p>
                    <img alt="" src={probs.url} />
                    {/* https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_São_Paulo_Zoo.jpg" */}

                    <div className="postSecondDiv">
                        <ChatBubbleOutlineIcon className="iconPostBase" />
                        <RepeatIcon className="iconPostBase" />
                        <FavoriteBorderIcon className="iconPostBase" />
                        <PublishIcon className="iconPostBase" />

                    </div>




                </div>


            </div>




        </div>
    )
}

export default Post
