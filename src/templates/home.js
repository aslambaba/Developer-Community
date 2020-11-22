import React from 'react';
import LandingPage from '../components/landingPage';
import Layout from '../components/layout';
import Style from './style/developers.module.css';


function home({ pageContext }) {

    console.log(pageContext);
    return (
        <div>
            <Layout>
                <LandingPage />
                <div className={Style.DeveloperSec}>
                    <h2>Meet Our Developers</h2>
                    {
                        Object.keys(pageContext).map(obj => {
                            return (
                                <a href={`/developer/${pageContext[obj].name}`}><img src={pageContext[obj].image.file.url} alt={pageContext[obj].name} /></a>
                            );
                        })
                    }
                </div>
            </Layout>

        </div>

    );
}

export default home;