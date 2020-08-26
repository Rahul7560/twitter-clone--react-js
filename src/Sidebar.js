import React from 'react'
import "./Media/Css/Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidebaroption from './Sidebaroption'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar" >
            <TwitterIcon className="sidebarTwitterIcon" />

            <Sidebaroption
                active
                icon={HomeIcon}
                text="Home"
            />
            <Sidebaroption
                icon={SearchIcon}
                text="Explore"
            />
            <Sidebaroption
                icon={NotificationsActiveIcon}
                text="Notification"
            />
            <Sidebaroption
                icon={EmailIcon}
                text="Message"
            />
            <Sidebaroption
                icon={BookmarkIcon}
                text="Bookamark"
            />
            <Sidebaroption
                icon={ClearAllIcon}
                text="List"
            />
            <Sidebaroption
                icon={AccountBoxIcon}
                text="Profile"
            />
            <Sidebaroption
                icon={MoreHorizIcon}
                text="More"
            />
            <Button variant="outlined" className="sidebar_tweet"  > Tweet </Button>
        </div>



    )
}

export default Sidebar
