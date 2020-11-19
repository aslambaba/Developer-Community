import React from 'react'
import Style from './style/socialmedia.module.css';
import { AiFillFacebook,AiFillLinkedin,AiOutlineGithub } from "react-icons/ai";

function SocialMedia({social}) {
    console.log(social)
    return (
        <div className={Style.SocialMedia}>
            <h4>Social Media</h4>
            <a target='_blank' href={social.facebook.internal.content}><AiFillFacebook/></a>
            <a target='_blank' href={social.linkedin.internal.content}><AiFillLinkedin /></a>
            <a target='_blank' href={social.github.internal.content}><AiOutlineGithub /></a>
        </div>
    )
};
export default SocialMedia;