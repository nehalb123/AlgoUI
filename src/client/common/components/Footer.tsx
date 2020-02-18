/// <reference path='../../index.d.ts'/>

import * as React from 'react';
import {Grid, Col} from 'react-bootstrap';
/* import * as logo from '../../assets/img/logo.png'; */
/* import {CSSProperties} from "react"; */

/* const footerLogoStyle: CSSProperties = {
    height: 50,
    marginBottom: 15,
}; */

const Footer = () => (
    <footer className="footer">
        <hr/>
        <Grid>
            <Col md={12}>
                <span>Created by UGFsbGF2aSBWZXRhbCwgTmVoYWwgQm9yb2xlLCBBbnVyYWcgR3VwdGE=</span>
            </Col>
           {/*  <Col md={7}>
                <img src={logo} className="img-responsive" style={footerLogoStyle}/>
            </Col> */}
        </Grid>
    </footer>
);

export default Footer;
