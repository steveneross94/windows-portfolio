import React from 'react';
import { useState } from 'react';

const mainStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#d5d5d5"
}

const childStyles = {
    display: "flex",
    flexDirection: "row"
}

const Navbar = () => {
    const [hidden,setHidden] = useState(true)
  return (
    <div style={mainStyles}>
        <div style={childStyles}>
            <div>
                <div>Start</div>
                {!hidden && 
                    <ul>
                        <li>About</li>
                        <li>IDK</li>
                    </ul>
                }
            </div>
            <span> | </span>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>GitHub</span>
        </div>
        <div>
            No Content Yet
        </div>
    </div>
  )
}

export default Navbar