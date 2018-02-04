//default imports
import React, { Component } from 'react';
import {connect} from "react-redux";
import '../ui-toolkit/css/nm-cx/main.css';
import {WaitSpinner} from '../components/waitSpinner'

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
            // Render nothing if the "show" prop is false
            if(!this.props.show) {
              return null;
            }
        
            // The gray background
            const backdropStyle = {
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0,0,0,0.3)',
              padding: 50
            };
        
            // The modal "window"
            const modalStyle = {
              backgroundColor: '#fff',
              borderRadius: 5,
              maxWidth: 500,
              minHeight: 300,
              margin: '0 auto',
              padding: 30
            };
        
            return (
                <div className="backdrop">
                    <div className="modal">
                        {this.props.listOfFilms.map(this.mapListOfFilmsToDisplay)}  
                        <WaitSpinner isWaiting={this.props.filmsAreLoading} />
                        <div className="footer">
                            <button onClick={this.props.closeFilmsDisplay}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
       /* <div className="reveal-overlay">
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
        </div>*/
    );
  }
} //end of DisplayFilms

const mapStateToProps = (state) => {
  return {
      listOfFilms: state.filmsToDisplay,
      filmsAreLoading: state.ghibliFilmsAreLoading
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
