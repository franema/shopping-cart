import React from 'react'
import "../css/loader.css"

function Loader({loaderStyle}) {

    return (
        <div className='loader-wrapper' style={loaderStyle}>
            <div className='loader'></div>
        </div>
    )
}

export default Loader