import React, { Component } from 'react';
import './PhotoVoyage.css';


class PhotoVoyage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="test">  
      <img src={this.props.image} alt="voyage"/>
      </div>
     );
  }
}
 
export default PhotoVoyage;