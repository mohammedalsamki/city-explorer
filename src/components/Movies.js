import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Movies extends Component {
    render() {
        return (
            <div>
                <p>{this.props.Title}</p>
            <p>{this.props.description}</p>
            <p>{this.props.data}</p>
            <img src={this.props.imgURL} alt="Movies" width="400" height="500"></img>
            </div>
        )
    }
}

export default Movies
