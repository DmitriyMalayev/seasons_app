import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  return (
    <div>
      <strong>{season === "winter" ? "It's freezing" : "It's so hot"}</strong>
    </div>
  );
};

export default SeasonDisplay;
