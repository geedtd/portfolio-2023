import React from 'react'

function Nav() {
    return (
      <div className="floating-nav">
        <button className="btn side-button left"> {"<"} </button>
        <button className="btn middle-button">NAVIGATION</button>
        <button className="btn side-button right">{">"} </button>
      </div>
    );
}

export default Nav
