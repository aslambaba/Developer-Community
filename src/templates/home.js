import React from 'react';
import LandingPage from '../components/landingpage';
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
                                <img src={pageContext[obj].image.file.url} alt={pageContext[obj].name} />
                            );
                        })
                    }
                </div>
            </Layout>

        </div>

    );
}

export default home;