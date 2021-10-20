import React from 'react';
import axios from 'axios';
import Map from './Components/Map';
import Weather from './Components/Weather';
import ErrorMessage from './Components/ErrorMessage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationObj: '',
      errorCode: '',
      errorAlert: false,
      mapImg: '',
      weatherData: [],
      showWeather: false

    }
  }

  //functions
  onErrorClose = () => {
    this.setState({ errorAlert: false })
  }
  getLocation = async (event) => {
    event.preventDefault();
    console.log(`button pushed:`);
    let apiKey = 'pk.b5c86569d4017c823b239e4acadfb112'
    let URL = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.state.cityName}&format=json`;
    console.log(URL);


    try {
      let locData = await axios.get(URL);
      console.log(locData.data);
      this.setState({ locationObj: locData.data[0] });

      let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=12`;
      this.setState({ mapImg: mapURL });
      console.log(this.state.mapImg);

      let allWeatherArray = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}`);
      this.setState({ weatherData: allWeatherArray.data, showWeather: true });
      console.log(this.state.weatherData);

    }
     
      catch(error) {
        console.log('there as an error:', error)
        this.setState({ errorCode: error.message })
        this.setState({ errorAlert: true })
    };
  }
 

render(){
  return (
    <>
      <h1>Where are we going?</h1>

      <input onChange={(event) => this.setState({ cityName: event.target.value })}></input>
      <button onClick={this.getLocation}>Let's GO!</button>
      <h2> City Found:{this.state.locationObj.display_name}</h2>
      <h4> Latitude:{this.state.locationObj.lat}</h4>
      <h4> Longitude:{this.state.locationObj.lon}</h4>


      {this.state.showWeather && this.state.weatherData.map((el) =>
        <Weather date={el.date} description={el.description} />)
      }

      {this.state.locationObj && 
        <Map
          mapImg={this.state.mapImg}
          locationObj={this.state.locationObj}
        />
      }
      <ErrorMessage
        errorCode={this.state.errorCode}
        errorAlert={this.state.errorAlert}
        onErrorClose={this.onErrorClose}
      />
    </>
  );
} 
}


export default App;
