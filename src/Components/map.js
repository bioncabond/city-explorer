
import React from 'react';
import Card from 'react-bootstrap/Card';

class Map extends React.Component {
  
  render() {
    console.log(this.props.mapImg)
    return (
      <>
        <div className="m-2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.mapImg} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
               </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </>

    )
  }
}

export default Map;