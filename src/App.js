import React, { Component } from 'react';
import Amarapic from './Amarapic.jpg';
import Destry from './Destry.jpg';
import Waterfall from './Waterfall.jpg';
import sun from './sun.png';
import Isaac from './Isaac.jpg';
import Sarah from './Sarah.jpg';
import './App.css';
import Amara from './Components/Amara.js';





class App extends Component {
  constructor(props) {
   super(props);
this.state={    showComponent: {Amara}
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: {Amara},
    });
  }


  render() {

    return (
<div className="App">
      <head> <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      </head>


       <img src={Waterfall} className="Waterfall" alt="Waterfall" />
        <header className="App-header">

          <h1 className="App-title"> The Summerland</h1>
          <img src={sun} className="Sun" alt="sun"/>
        </header>
        <p className="App-intro">
hello
        </p>

<div className="Main">
<div id="Container1">
<div className="w3-card-4 w3-dark-grey">

<div className="w3-container w3-center">
 <h3>NetCard</h3>
 <img src={Amarapic} alt="Amara" className="Amara"/>
 <h5>Amara-Nichelle</h5>

 <button className="w3-button w3-green" onClick={this._onButtonClick}>pics</button>
 <button className="w3-button w3-red">videos</button>
</div>
</div>

</div>
<div className="w3-card-4 w3-dark-grey">

<div className="w3-container w3-center">
 <h3>NetCard</h3>
 <img src={Destry} alt="Destry" className="Destry"/>
 <h5>Destry</h5>

 <button className="w3-button w3-green">pics</button>
 <button className="w3-button w3-red">videos</button>
</div>
</div>







</div>

<div className="center">
<div id="Container1">
<div className="w3-card-4 w3-dark-grey">

<div className="w3-container w3-center">
 <h3>NetCard</h3>
 <img src={Isaac} alt="Isaac" className="Isaac"/>
 <h5>Isaac</h5>

 <button className="w3-button w3-green">pics</button>
 <button className="w3-button w3-red">videos</button>
</div>
</div>
</div>

<div className="w3-card-4 w3-dark-grey">

<div className="w3-container w3-center">
 <h3>NetCard</h3>
 <img src={Sarah} alt="Sarah" className="Sarah"/>
 <h5>Sarah-Anne</h5>

 <button className="w3-button w3-green">pics</button>
 <button className="w3-button w3-red">videos</button>
</div>
</div>








</div>

</div>

    );

  }
}

export default App;
