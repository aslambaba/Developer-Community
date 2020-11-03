import React from 'react';
import Style from './style/developer.module.css';
import Image from '../images/aslamsarfraz.jpg';
import HireMeButton from '../components/hiremeButton';
import SocialMediaIcon from '../components/socialMedia';

function developer({ pageContext }) {
    console.log(pageContext);
    return (
        <div className={Style.mainSec}>
            <div className={Style.DeveloperSec}>
                <div className={Style.DeveloperImage}><img src={Image} alt='Developer' /></div>
                <h1>{pageContext.name}</h1>
                <p>{pageContext.Data}</p>
                <HireMeButton />
                <SocialMediaIcon />
            </div>
        </div>
    )
}

export default developer;