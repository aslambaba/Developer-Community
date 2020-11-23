import React, { useState } from 'react';
import Style from './style/developer.module.css';
import HireMeButton from '../components/hiremeButton';
import SocialMediaIcon from '../components/socialMedia';
import Layout from '../components/layout';
import firebase from "gatsby-plugin-firebase";

function Developer({ pageContext }) {

    const fire = firebase.auth();

    const onSignupClick = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            console.log('Google Successful')
        }).catch(function (error) {
            console.log('Google Error')
        });
    }

    const SignOut = () => {
        fire.signOut().then(function() {
            console.log('SignOut Successful !!')
          }).catch(function(error) {
            console.log(error);
          });
    }
    console.log(pageContext);

    const [UserActivity, SetuserActivity] = useState();

    fire.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            SetuserActivity(true);
        } else {
            SetuserActivity(false)
            // No user is signed in.
        }
    });

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
                        {
                            UserActivity === false
                                ?
                                <div className={Style.SignupSEC}>
                                    <p>Please Login With Google To Contact Our Freelancer</p>
                                    <button onClick={onSignupClick} className={Style.SignBTN}>Signup</button>
                                </div>
                                :
                                <div className={Style.DeveloperSocial}>
                                    <SocialMediaIcon social={pageContext} />
                                    <HireMeButton />
                                    <button onClick={SignOut} className={Style.SignBTN}>Sign Out</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Developer;