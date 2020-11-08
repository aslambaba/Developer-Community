import React from 'react';
import LandingPage from '../components/landingPage';

function home({ pageContext }) {

    console.log(pageContext);
    return (
        <div>
            <LandingPage />
            <h1>Gatsby</h1>
            {Object.keys(pageContext).map((obj) => {
                if (obj < 3) {
                    return (
                        <p key={obj}>{pageContext[obj].name}</p>
                    )
                }
            })}
        </div>

    );
}

export default home;