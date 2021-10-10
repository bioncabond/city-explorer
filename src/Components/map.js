
import React from 'react';
import Card from 'react-bootstrap/Card';

class Map extends React.Component {
  
  render() {
    console.log(this.props.mapIMG)
    return (
      <>
        <div className="m-2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.b5c86569d4017c823b239e4acadfb112&center=${this.props.locationObj.lat},${this.props.locationObj.lon}&zoom=4`} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <p>Latitude: {this.props.locationObj.lat}</p>
                <p>Longitude: {this.props.locationObj.lon}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </>

    )
  }
}

export default Map;