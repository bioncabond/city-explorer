import React from 'react';
import axios from 'axios';
import Map from './Components/Map.js' 
import ErrorMessage from './Components/ErrorMessage.js';



class App extends React.Component {
  constructor(props){
    super(props); 
    this.state={
      cityName: '',  
      locationObj: '',
      mapIMG: '',
      errorCode: '',
      errorAlert: false
 
    }
  }  

  //functions


onErrorClose = () => {
  this.setState({errorAlert : false})
}

  getLocation = async () => {
      console.log(`button pushed:`);
      let apiKey = 'pk.b5c86569d4017c823b239e4acadfb112'
      let URL = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.state.cityName}&format=json`; 

      console.log(URL);


      try{
      let locData = await axios.get(URL); 
      console.log(locData.data);
        this.setState({locationObj: locData.data[0]});

        let mapURL= `https://maps.locationiq.com/v3/staticmap?key=$pk.b5c86569d4017c823b239e4acadfb112&center=${this.props.locationObj.lat},${this.props.locationObj.lon}&zoom=9`;
        this.setState({
          mapIMG: mapURL
        });
      }
      catch (error) {
        console.log('there as an error:' , error)
        this.setState({errorCode:error.message})
        this.setState({errorAlert:true})
      }
    }
  
  render(){
    return (
      <>
    <h1>Where are we going?</h1> 
    
    
   
      
        <label></label><input onChange={(event) => this.setState({cityName: event.target.value})}></input>  
                     
       <button type = "submit" onClick ={this.getLocation}>Let's GO!</button>
    
    
    
    <h2> City Found:{this.state.locationObj.display_name}</h2>
   
   { this.state.locationObj &&
     <Map
      mapIMG={this.state.locationObj}
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
