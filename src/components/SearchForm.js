import React, { Component } from 'react'

export class SearchForm extends Component {


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input  type="text" 
                            placeholder="Please enter a city name..."
                            onChange={this.props.handleLocation}
                            />
                            <br/>
                            <br/>
                    <input type="submit" value="Explore!"/>
                    
                    <br/>
                    <br/>
                </form>
            </div>
        )
    }
}

export default SearchForm