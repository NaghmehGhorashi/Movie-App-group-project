import React from 'react'
import style from "./container.module.css"

// create Wrapper to put all code in side
function Wrapper({ children }) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Wrapper
