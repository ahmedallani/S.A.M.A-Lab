import React from "react";
import $ from 'jquery';

export default class Projects extends React.Component {
    constructor (){
        super();
        this.state = {
            name : '',
            description : ''
        }
    }

    //detect changes in the name field and save them in the state
    nameChanges(evt){
        this.setState({ name: evt.target.value });
    }
    //detect changes in the description field and save them in the state
    descriptionChange(evt){
        this.setState({ description: evt.target.value });
    }
    //saving data in the database via a post request
    saveData(){
        $.ajax({
            url: '/saveProject',
            data: JSON.stringify({ name: this.state.name, description: this.state.description }),
            type: 'POST',
            contentType: 'application/json'
        }).done((data)=>{console.log("Projects -> }).done -> data", data)});
        
    }

  render() {
    return (
      <div>
        <h1>add a new project</h1>
        <br />
        <h3>Project name : </h3>
        <br />
        <input type="text" onChange={this.nameChanges.bind(this)} />
        <h3>Project description : </h3>
        <br />
        <input type="text"  onChange={this.descriptionChange.bind(this)} />
        <br/>
        <button onClick={this.saveData.bind(this)} > Add project now </button>
      </div>
    );
  }
}
