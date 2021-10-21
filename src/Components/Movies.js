import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';


class Movies extends React.Component {
  render() {
    return (
      <>
        <div className="m-2">
          <Card style={{ width: '18rem', marginLeft: 'auto', marginRight:'auto', marginTop:'1rem' }}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.original_title}</Card.Title>
              <Card.Text>
                <p>Overview: {this.props.overview}</p>
                <p>Release Date: {this.props.release_date}</p>
                <p>Average Votes: {this.props.vote_average}</p>
                <p>Total Votes: {this.props.vote_count}</p>
                <p>Popularity: {this.props.popularity}</p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                    <ListGroupItem>Rating: {this.props.ave}</ListGroupItem>
                    <ListGroupItem>Released: {this.props.release_date}</ListGroupItem>
                </ListGroup>
          </Card>
        </div>
      </>
    )
  }
}
export default Movies;