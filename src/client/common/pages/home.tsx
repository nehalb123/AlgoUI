import * as React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import FontAwesome from '../components/FontAwesome';
import * as profile from '../../assets/img/wallpaper.png';
import * as w2 from '../../assets/img/w2.png';
import * as w3 from '../../assets/img/w3.png';
import {connect} from "react-redux";
import {CSSProperties} from "react";

const starLightStyle: CSSProperties = {
    padding: 0,
    border: "none",
    borderTop: "solid 5px",
    textAlign: "center",
    maxWidth: 250,
    margin: "25px auto 30px",
    borderColor: "white"
};


const introTextNameStyle: CSSProperties = {
    display: "block",
    fontWeight: 500,
    fontSize: "3em"
};



export const Home = (props: {title: string}) => {
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
    
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src={profile} alt="New York" width="1200" height="700"/>
        <div className="carousel-caption">
         
          <div className="intro-text">
                        <span className="name" style={introTextNameStyle}>{props.title}</span>
                        <hr className="star-light" style={starLightStyle}/>
                    </div>
                    <Link to="/problems" className="btn btn-lg btn-outline">
                        <FontAwesome prefix="fas" name="bars"/> Goto Problems
                    </Link>
        </div>      
      </div>

     
      <div className="item">
        <img src={w3} alt="Los Angeles" width="1200" height="700"/>
        <div className="carousel-caption">
         
          <div className="intro-text">
                        <span className="name" style={introTextNameStyle}>{props.title}</span>
                        <hr className="star-light" style={starLightStyle}/>
                    </div>
                    <Link to="/problems" className="btn btn-lg btn-outline">
                        <FontAwesome prefix="fas" name="bars"/> Goto Problems
                    </Link>
        </div>      
      </div>
    </div>

   
    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
</div>
    );
};

const mapStateToProps = (state: {config: {title: string}}) => {
    return {
        title: state.config.title
    };
};

const HomePage = connect(
    mapStateToProps
)(Home);

export {HomePage};