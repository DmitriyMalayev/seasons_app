import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (success) => console.log(success),
    (error) => console.log(error)
  );

  return <div>Hello There</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
