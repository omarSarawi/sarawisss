import React, { Component } from 'react'; // Corrected import statement
import './App.css'
import SignUpForm from './components/forms/SignUpForm';
import SignInForm from './components/forms/SignInForm';
import Weather from "./components/Weather";
import CountryForm from "./components/forms/CountryForm"; 
import ProfilePage from './components/forms/ProfilePage';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jordan from "./components/Jordan";


const api_key="363aafc6b3534162b1305328242902"

class App extends Component { // Changed Components to Component
  getWeather =async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${country}-${city}&days=14`);


    const data= await api.json();
    console.log(data)
    
  }

  render() {
    return (
//      <div>
         // <h1>Weather api</h1>
        //<Weather/>
       // <h1>Sign Up</h1>
       // <SignUpForm />
       // <h1>Sign In</h1>
        //<SignInForm />
      //  <h1>Country Form</h1>
    //    <CountryForm getWeather={this.getWeather}/> 
  //    </div>
  <div>
  <Jordan/>
  </div> 
  );
  }
}

export default App;
