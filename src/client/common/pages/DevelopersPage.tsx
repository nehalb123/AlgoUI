import * as React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import * as nehal from '../../assets/img/nehal.png';
import * as anurag from '../../assets/img/anurag.png';
import * as pallavi from '../../assets/img/pallavi.png';
import { CSSProperties } from 'react';

const imgStyle: CSSProperties = {
    borderRadius: "50%",
    width: 300,
    height: 320
};



export const DevelopersPage = () => (
  <Grid>
      <Row>
            <Col md={4}>
                <div className="item">
               <img src={nehal} style={imgStyle}/>
               <h2 className="caption">Nehal Borole</h2>
               </div>
            </Col>
            <Col  md={4}>
                <div className="item">
               <img src={anurag} style={imgStyle}/>
               <h2 className="caption">Anurag Gupta</h2>
               </div>
            </Col>
            <Col  md={4}>
                <div className="item">
               <img src={pallavi} style={imgStyle}/>
               <h2 className="caption">Pallavi Vetal</h2>
               </div>
            </Col>
        </Row>
  </Grid>
);