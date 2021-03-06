import React from 'react';
import Style from './style/developers.module.css';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout';

function Developers({ pageContext }) {
    console.log(pageContext);
    return (
        <Layout>
            <div className={Style.MainConatiner}>
                <Grid container spacing={5} className={Style.GridCon}>
                    {
                        Object.keys(pageContext).map(obj => {
                            return (
                                <Grid item className={Style.Grid} key={obj}>
                                    <img src={pageContext[obj].image.file.url} alt={pageContext[obj].name} />
                                    <h2>{pageContext[obj].name}</h2>
                                    <p>{pageContext[obj].job}</p>
                                    <a href={`/developer/${pageContext[obj].name}`}><button>View Profile</button></a>
                                </Grid>
                            );
                        })
                    }

                </Grid>
            </div>
        </Layout>

    );
}

export default Developers;