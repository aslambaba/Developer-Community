import React from 'react';
import Style from './style/developers.module.css';
import Grid from '@material-ui/core/Grid';
import Image from '../images/aslam2.png';

function Developers() {
    return (
        <div className={Style.MainConatiner}>
            <Grid container spacing={5}>
                <Grid item xs={4} className={Style.Grid} spacing={4} >
                    <img src={Image} />
                    <h2>Aslam Sarfraz</h2>
                    <p>Full Stack Web Developer</p>
                    <button>View Profile</button>
                </Grid>
                <Grid item xs={4} className={Style.Grid}>
                    <img src={Image} />
                    <h2>Usama Yasin</h2>
                    <p>Mern Stack Web Developer</p>
                    <button>View Profile</button>
                </Grid>
                <Grid item xs={4} className={Style.Grid}>
                    <img src={Image} />
                    <h2>Uzair</h2>
                    <p>LAMP Stack Web Developer</p>
                    <button>View Profile</button>
                </Grid>
                <Grid item xs={4} className={Style.Grid}>
                    <img src={Image} />
                    <h2>Happy</h2>
                    <p>UX/UI Designer</p>
                    <button>View Profile</button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Developers;