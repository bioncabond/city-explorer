import React from 'react';
import axios from 'axios';
import Map from './Components/map.js';
import Weather from './Components/weather.js';


class App extends React.Component {
  constructor(props){
    super(props); 
    this.state={
      cityName: '',  
      locationObj: {},
      errorCode: '',
      errorAlert: false,
      mapImg: '',
      weatherData: [],
      showWeather: false
    }
  }  

  //functions
  getLocation = async () => {
      console.log(`button pushed:`);
      let apiKey = 'pk.b5c86569d4017c823b239e4acadfb112'
      let URL = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.state.cityName}&format=json`; 
      

      console.log(URL);

      try{
      let locData = await axios.get(URL); 
      console.log(locData.data);
        this.setState({locationObj: locData.data[0]});
                
        let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=12`;
        this.setState({mapImg: mapURL});
        console.log(this.state.mapImg); 

        let allWeatherArray = await axios.get(`http://localhost:3001/weather?searchQuery=${this.state.cityName}`);
        this.setState({weatherData : allWeatherArray, showWeather: true});
        console.log(this.state.weatherData);

      }

      catch (error) {
        console.log('there as an error:' , error)
      }
    } 
  
  render(){
    return (
      <>
    <h1>Where are we going?</h1> 
    {/* <h3>{this.state.cityName}</h3> */}
    <input onChange={(event) => this.setState({cityName: event.target.value})}>
    </input>
    <button onClick ={this.getLocation}>Let's GO!</button>
    <h2> City Found:{this.state.locationObj.display_name}</h2>
    <h4> Latitude:{this.state.locationObj.lat}</h4>
    <h4> Longitude:{this.state.locationObj.lon}</h4>
    <Map mapImg={this.state.mapImg}/>    
    
    {this.state.showWeather && this.state.weatherData.map((el) =>
          <Weather date={el.date} description={el.description} />)
        }

    </>
  );
} 
}

export default App;
