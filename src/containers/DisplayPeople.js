//default imports
import React, { Component } from 'react';
import {connect} from "react-redux";
import '../ui-toolkit/css/nm-cx/main.css';

//app imports
import { getGhibliPersonFilms } from '../actions/ghibliActions';

class DisplayPeople extends Component {
    constructor(props) {
        super(props);

        this.mapPeopleList = this.mapPeopleList.bind(this);
    }

    mapPeopleList(personObject, arrayIndex)
    {
        //console.log("in mapPeopleList", personObject);
        //console.log("in mapPeopleList", this.props);

        //vars 
        let personStyle = "";
        let newRowInject = "";

        //set icon - reference NM Style guide: https://uitk.learnvest.com/v/1.18.5/style-guide/icons.html 
        if(personObject.gender.toLowerCase() === "male")
        {
            personStyle = "icon-ill-maleavatar";
        }
        else if (personObject.gender.toLowerCase() === "female")
        {
            personStyle = "icon-ill-femaleavatar";
        }
        else
        {
            personStyle = "icon-ill-happyface";
        }

        if (((arrayIndex + 1) % 5) === 0)
        {
            newRowInject = <br key={"breakRowKey" + arrayIndex} />
        }

        return (
            <span key={"bringDivsTogetherSpan" + arrayIndex}>
            <div id={"characterContainer" + arrayIndex} key={"characterContainer" + arrayIndex} 
                style={{display: "table-cell", width: "100px", height: "100px", textAlign: "center"}} 
                onClick={() => this.props.getPeopleFilmInformation(personObject)}>
                <div id={"characterIcon" + arrayIndex} key={"characterIcon" + arrayIndex}>
                    <span className={"icon-illustrative " + personStyle}></span>
                </div>
                <div id={"characterName" + arrayIndex} key={"characterName" + arrayIndex}>
                    {personObject.name}
                </div>
            </div>
            {newRowInject}
            </span>
        )
    } //end of mapPeopleList

  render() {
    console.log("DisplayPeople Props:", this.props);

    return (
        <div id="peopleRow" className="row">
            <div className="small-3 columns">
                &nbsp;
            </div>
            <div className="small-6 columns">
                {this.props.listOfPeople.map(this.mapPeopleList)}      
            </div>
            <div className="small-3 columns">
                &nbsp;
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      listOfPeople: state.listOfGhibliPeople,
      werePeopleRetrieved: state.ghibliPeopleRetreived
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPeopleFilmInformation: (personObject) => {
            dispatch(getGhibliPersonFilms(personObject));
            //console.log("here " + listOfFilms[0]);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPeople);
