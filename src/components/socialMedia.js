import React from 'react'
import Style from './style/socialmedia.module.css';
import { AiFillFacebook,AiFillLinkedin,AiOutlineGithub } from "react-icons/ai";

function SocialMedia() {
    return (
        <div className={Style.SocialMedia}>
            <h4>Social Media</h4>
            <AiFillFacebook/>
            <AiFillLinkedin />
            <AiOutlineGithub />
        </div>
    )
};
export default SocialMedia;