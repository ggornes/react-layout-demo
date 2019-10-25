import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAlert, MDBIcon} from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css'
import Event from "./components/Event";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            events: [
                {id:1, title:"Event1", time:"10:00", location:"Perth", description:"aaaa"},
                {id:2, title:"Event2", time:"12:00"},
                {id:3, title:"Event3", time:"17:00"}

            ]
        };
    }


    handleDelete = eventId => {
        const events = this.state.events.filter(
            e => e.id !== eventId
        );
        this.setState({events});
    }


    render() {
        return (
            <MDBContainer className="bg-dark text-light" >
                {/*Header*/}
                <MDBRow>
                    <MDBCol >
                        <img src={logo} className="App-logo" alt="logo" />
                    </MDBCol>
                    <MDBCol className="text-danger">
                        Welcome
                    </MDBCol>
                </MDBRow>
                {/*Main*/}
                <MDBRow>
                    <MDBCol size="9">
                        {this.state.events.map(event => (
                            <Event key={event.id}
                                   id = {event.id}
                                   title={event.title}
                                   time={event.time}
                                   description={event.description}
                                   location={event.location}
                                   onDelete = {this.handleDelete}
                            />
                        ))}
                    </MDBCol>
                    <MDBCol size="3">
                        <h5>Today</h5>
                        <p className="text-center blue-gradient">{this.state.events.length} events</p>
                        <h6>Weather</h6>
                        <MDBIcon icon="sun"/>
                        <p>Sunny</p>
                        <p>23&deg;</p>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        );
    }

}

export default App;
