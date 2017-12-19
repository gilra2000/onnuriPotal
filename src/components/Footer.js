import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import styles from '../index.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div style={{height:'100%'}}>
            <div style={{height:423, backgroundColor:'#fbfbfb'}}></div>

            <div style={{height:227, width:'100%', backgroundColor:'#515456', textAlign:'center'}}>
                <div style={{margin: 'auto', maxWidth:1200, paddingTop:30}}>
                    <Grid container justify={'center'}>
                        <Grid item xs={12} md={2}>
                            <div>onnuri</div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div style={{height:'99%', color:'#fff'}}>
                                Global site | English | 日本語 | 中國語
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div style={{height:'99%'}}>
                                123123123123123v
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>

    )
}

export default Footer;