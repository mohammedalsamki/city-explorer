import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap'


export class Movies extends Component {
    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            <p>{this.props.title}</p>
                            <p>{this.props.description}</p>
                            <p>{this.props.data}</p>
                            <p>{this.props.average_votes}</p>
                            <img src={this.props.image_ur} alt={this.props.title} width="400" height="500"></img>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Movies
