import React from 'react';
import Style from './style/developer.module.css';
import Image from '../images/aslamsarfraz.jpg';
import HireMeButton from '../components/hiremeButton';
import SocialMediaIcon from '../components/socialMedia';
function developer() {
    return (
        <div className={Style.mainSec}>
            <div className={Style.DeveloperSec}>
                <div className={Style.DeveloperImage}><img src={Image} alt='Developer' /></div>
                <h1>Aslam Sarfraz</h1>
                <p>Full Stack Web-Development - Responsive  Lightweight
                Specializes in Full Stack Development
                <br />
                I'm a full-stack web-developer having 4+ years of experience in different projects and deploy 50+ sites during this period and not just that I also learn a lot of new technologies and try to provide the latest and up-to-date technologies on my client projects.

                I'm also a DevOps engineer so I'll deploy sites in the very manageable form with the help of Docker and Kubernetes.
                In these 4+ beautiful years, I'll get a very great experience in
                <br />
                Html5, CSS3, Javascript, Bootstrap
                Php, Mysql Database, Laravel,
                Firebase Cloud Database, Firebase Realtime Database, Authentications, Hostings
                React, React Hooks, Rest API, GraphQL
                WordPress, Shopify, Magento, Wix, Woocommerce, Payment Gateway Setups
                Express, MongoDB,
                Docker, Kubernetes,
                AWS, Google Clouds, Microsoft Azure, Digital Ocean
                <br /><br />
                As a full-stack developer and founder of aslambaba.com and COO at Edenstuff.com, I learn a lot about human behaviors so I'll also advise my client that what part of their site is most important and we should work on it more and what languages, libraries, dependencies are good for their site. So Feel Free to contact me.
                <br /><br />
                I'm happy to solve your problem.</p>
                <HireMeButton />
                <SocialMediaIcon />
            </div>
        </div>
    )
}

export default developer;