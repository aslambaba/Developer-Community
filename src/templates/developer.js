import React from 'react';
import Style from './style/developer.module.css';
import HireMeButton from '../components/hiremeButton';
import SocialMediaIcon from '../components/socialMedia';
import Layout from '../components/layout';

function developer({ pageContext }) {
    console.log(pageContext);
    return (
        <Layout>
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
                        <p>{pageContext.bio.internal.content}</p>
                    </div>
                    <div className={Style.DeveloperSocial}>
                        <SocialMediaIcon social={pageContext}/>
                        <HireMeButton />
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default developer;