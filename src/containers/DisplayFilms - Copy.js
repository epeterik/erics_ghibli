//default imports
import React, { Component } from 'react';
import {connect} from "react-redux";
import '../ui-toolkit/css/nm-cx/main.css';

//app imports
import { displayCloseGhibliPersonFilms } from '../actions/ghibliActions';

class DisplayFilms extends Component {
    constructor(props) {
        super(props);

        this.mapListOfFilmsToDisplay = this.mapListOfFilmsToDisplay.bind(this);
    }

    mapListOfFilmsToDisplay(filmObject, arrayIndex)
    {
        //console.log("in mapListOfFilmsToDisplay", filmObject);
        console.log("in mapListOfFilmsToDisplay - processing index: " + arrayIndex + " - this.props: ", this.props);

        return (
            <div key={"filmInfo" + arrayIndex}>
                <h3 key={"filmTitle" + arrayIndex}>{filmObject.title}</h3>
                <p key={"filmDirector" + arrayIndex}><b key={"filmDirectorBold" + arrayIndex}>{filmObject.director}</b>&nbsp;({filmObject.release_date})</p>
                <p key={"filmDescription" + arrayIndex}>{filmObject.description}</p>
            </div>
        )
    } //end of mapListOfFilmsToDisplay

  render() {
    console.log("DisplayFilms Props:", this.props);

    //Modal taken from NM Style Guide: https://uitk.learnvest.com/v/1.18.5/style-guide/modals.html 
    return (
        <div className="reveal-overlay">
            <div className="reveal" id="exampleModal1">
                <div className="reveal-header">
                    <h4>This is a header</h4>
                </div>
                <div className="reveal-content">
                {this.props.listOfFilms.map(this.mapListOfFilmsToDisplay)}    
                </div>
                <button className="reveal-close" data-close="">
                    <span className="icon icon-close"></span>
                </button>
            </div>
        </div>
    );
  }
} //end of DisplayFilms

const mapStateToProps = (state) => {
  return {
      listOfFilms: state.filmsToDisplay
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeFilmsDisplay: () => {
            dispatch(displayCloseGhibliPersonFilms());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFilms);
