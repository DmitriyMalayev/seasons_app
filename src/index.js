import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: null}; 
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (success) => console.log(success),
      (error) => console.log(error)
    );

    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
