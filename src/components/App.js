import React, { Component } from 'react'; 
import ReactDOM  from 'react-dom';

class App extends Component { 
  constructor(props) { 
    super(props); 
    this.tick = this.tick.bind(this); 
  }

  tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('app'));
  }

  render() { 
    return ( 
      <div>
        {setInterval(this.tick, 1000)}
      </div>
    )
  }
}

export default App;