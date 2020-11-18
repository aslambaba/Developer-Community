import React from 'react';
import Style from './style/developer.module.css';
import HireMeButton from '../components/hiremeButton';
import SocialMediaIcon from '../components/socialMedia';

function developer({ pageContext }) {
    console.log(pageContext);
    return (
        <div className={Style.mainSec}>
            <div className={Style.DeveloperSec}>
                <div className={Style.DeveloperImage}>
                    <img src={pageContext.image.file.url} alt='Developer' />
                </div>
                <div className={Style.DeveloperTitle}>
                    <h1>{pageContext.name}</h1>
                    <p>{pageContext.job}</p>
                </div>

                <div className={Style.DeveloperData}>
                    <div className={Style.DeveloperBio}>
                        <p>I am a computer science graduate (2003) and a MBA (2012) with few local and international certifications earned in last 2 decades most recent are Certified Kubernetes Application Developer (CKAD) (2018) from CNCF – Linux Foundation and React Nanodegree from Udacity.</p>
                    </div>
                    <div className={Style.DeveloperSocial}>
                        <SocialMediaIcon social={pageContext}/>
                        <HireMeButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default developer;