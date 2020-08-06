import React from "react";

function Image(props) {
  return (
    <div className="image">
      <img src={props.source} alt="Tokyo Japan" />
    </div>
  );
}

export default Image;