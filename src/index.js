import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
    //Only time for direct assignment

    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          //This runs only after a value has been received in the future.
          lat: position.coords.latitude,
        }),
      (error) => this.setState({ errorMessage: error.message })
      //Whenever we update state we don't have to update all values
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>"Loading"</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
