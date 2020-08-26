import React, { useState } from 'react'
import './Media/Css/Tweetbox.css'
import { Button, Avatar } from '@material-ui/core';
import db from './Firebase'

function Tweetbox() {
    const [tweet, settweet] = useState("");
    const [tweetImage, settweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: "Rahul R",
            id: "rahul1234",
            statement: tweet,
            url: tweetImage


        });
        settweetImage("");
        settweet("");

    };
    return (
        <div className="tweetbox">
            <form >
                <div className="tweettype">
                    <Avatar src="https://i.pinimg.com/originals/a1/e8/38/a1e83862a0f7e6c5129d7baf137023c0.png" />
                    <input onChange={(e) => settweet(e.target.value)} value={tweet} className="inputtweet" placeholder="What happening there" type="text" />
                </div>
                <input onChange={(e) => settweetImage(e.target.value)} value={tweetImage} className="urlTweet" placeholder=" Optional : Url of image" type="text" />

                <Button onClick={sendTweet} type="Submit" className="tweetButton"> Tweet </Button>








            </form>


        </div>
    )
}

export default Tweetbox
