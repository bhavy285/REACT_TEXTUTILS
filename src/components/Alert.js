import React from "react";
// import PropTypes from 'prop-types'
function Alert(props) {
  return (
    <div style={{height:'70px'}}>
    { props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}    role="alert"
        style={{
          color: props.mode === "dark" ? "blue" : "orange",
          fontFamily: "cursive",
          backgroundColor:'lemonchiffon'
        }}
     
      >
        {props.alert.type} : {props.alert.msg}
      </div> }
      </div>
    )
  
}

export default Alert;
