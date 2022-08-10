import React from "react";

const Die = (props) => {
  //console.log(props.isHeld);
  const styles = {
    backgroundColor: props.isHeld ? "#0ab4f7" : "white"
  };
  return (
    <>
      <div key={props.id} style={styles} onClick={props.handleDice}>
        {props.value}
      </div>
    </>
  );
};

export default Die;
