
import React, {Component} from "react";
import {MDBBadge, MDBBtn, MDBIcon} from "mdbreact";

class Event extends Component {
    state = {
        time: "?",
        title: "?"
    };

    constructor(props){
        super(props);
        this.state={
            time:this.props.time,
            title: this.props.title,
            description: this.props.description,
            location: this.props.location
        }
    }



    render() {
        return (
            <React.Fragment>
                <h5>
                    <strong>{this.state.time}</strong> - {this.state.title}
                    <MDBBadge color="danger"
                              className="ml-2 float-right"
                              onClick = {() => this.props.onDelete(this.props.id)}
                    >
                        <MDBIcon icon="minus"/>
                    </MDBBadge>

                </h5>
                {this.state.location && (
                    <p className="text-muted">
                        <MDBIcon icon="location-arrow"/>
                        Location: {this.state.location}
                    </p>
                )}

                {this.state.description && (
                    <p className="small text-info">Description: {this.state.description}</p>
                )}

                <MDBBtn
                onClick={()=>this.setState({title: "New title"})}>Change title</MDBBtn>
            </React.Fragment>
        );
    }
}

export default Event;
