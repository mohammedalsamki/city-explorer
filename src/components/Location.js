import React, { Component } from 'react'

export class Location extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.city_name}</h1>
                <h2>{this.props.type}</h2>
                <h3>{this.props.lat}/{this.props.lon}</h3>
                <img src={this.props.imgURL} alt="Girl in a jacket" width="500" height="600"/>
            </div>
        )
    }
}

export default Location