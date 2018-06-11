import React from 'react';
import ReactDOM from 'react-dom';
import Amarapic from '../Amarapic.jpg';
import './Amara.css';


export class Amara extends React.Component {

  render(){
    return(
      <div className="Amara-app"><img src={Amarapic} className="Amara" alt="Amara"/></div>    );
  }
}
