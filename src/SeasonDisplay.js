import React from "react";

const seasonConfig = {
  summer: {
    text: "It's so hot",
    iconName: "sun",
  },
  winter: {
    text: "It's freezing",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //contains text, iconName. Destructuring.
  return (
    <div>
      <i className={`${iconName} icon`} />
      <strong>{text}</strong>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

//Takes the value of icon and puts it in backticks along with the word icon
