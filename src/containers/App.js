//default imports
import React, { Component } from 'react';
import '../ui-toolkit/css/nm-cx/main.css';
import {connect} from "react-redux";

//app imports
import {getGhibliPeople} from '../actions/ghibliActions';
import {GhibliHeader} from '../components/header'
import {WaitSpinner} from '../components/waitSpinner'
import {ErrorEncountered} from '../components/errorEncountered'
import DisplayPeople from './DisplayPeople'
import DisplayFilms from './DisplayFilms'

class App extends Component {

  componentDidMount() {
    this.props.getGhibliPeople();
  }

  render() {
    console.log("App Props:", this.props);

    return (
      <div>
        <GhibliHeader /> 
        <WaitSpinner isWaiting={this.props.gettingPeople} />
        {this.props.showFilmsModal ? <DisplayFilms show={this.props.showFilmsModal}/> : <DisplayPeople />}
        <ErrorEncountered isError={this.props.dataLoadError} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      gettingPeople: state.ghibliPeopleAreLoading,
      dataLoadError: state.ghibliPeopleRetrievalError,
      showFilmsModal: state.ghibliFilmsRetreived
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGhibliPeople: () => {
            dispatch(getGhibliPeople());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
