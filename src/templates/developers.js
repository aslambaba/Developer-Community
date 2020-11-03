import React from 'react';
import Style from './style/developers.module.css';
import Grid from '@material-ui/core/Grid';
import Image from '../images/aslam2.png';

function Developers({ pageContext }) {
    console.log(pageContext);
    
    return (
        <div className={Style.MainConatiner}>
            <Grid container spacing={5}>
                {/* {pageContext.map(obj => {
                    return (
                        <Grid item xs={4} className={Style.Grid}>
                            <img src={Image} />
                            <h2>{obj.name}</h2>
                            <p>{obj.Job}</p>
                            <button>View Profile</button>
                        </Grid>
                    );
                })} */}

            </Grid>
        </div>
    );
}

export default Developers;