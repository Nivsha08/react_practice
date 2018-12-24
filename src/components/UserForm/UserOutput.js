import React from "react";
import './UserOutput.css';

const userOutput = ( props ) => {
    return (
      <div>
          <p>username: <span className="username">{ props.username }</span></p>
      </div>
    );
};

export default userOutput;