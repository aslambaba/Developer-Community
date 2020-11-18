import React from 'react'
import Style from './style/socialmedia.module.css';
import { AiFillFacebook,AiFillLinkedin,AiOutlineGithub } from "react-icons/ai";

function SocialMedia({social}) {
    console.log(social)
    return (
        <div className={Style.SocialMedia}>
            <h4>Social Media</h4>
            <a href={social.pageContext.facebook}><AiFillFacebook/></a>
            <a href={social.pageContext.linkedin}><AiFillLinkedin /></a>
            <a href={social.pageContext.github}><AiOutlineGithub /></a>
        </div>
    )
};
export default SocialMedia;