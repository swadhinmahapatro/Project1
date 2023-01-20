import React from "react";

export default function Alert(props) {
    const capitalize=(type)=>{
        const lower=type.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
      </div>
  );
}
