
import React from 'react';

class Weather extends React.Component {
  
    render() {
      
      return (
        <>
          <div className="m-2">
           <p>{this.props.date}: {this.props.description}</p>
          </div>
  
        </>
  
      )
    }
  }
  
  export default Weather;
