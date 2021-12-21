import { Avatar } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './sidebarchat.css';

function SidebarChat() {
const [seed, setSeed] =  useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);
const createChat =() =>{
    
}
    return (
        <div className="sidebar_chat">

            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebar_chat_info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    );
}

export default SidebarChat;