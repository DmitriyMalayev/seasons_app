import React from "react";
import ReactDOM from "react-dom";



class App extends React.Component {
  render() {
     window.navigator.geolocation.getCurrentPosition(
       (success) => console.log(success),
       (error) => console.log(error)
     );


    return (
      <div>
        Latitude: 
      </div>
  
      )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
