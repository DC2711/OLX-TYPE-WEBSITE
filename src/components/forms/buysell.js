import React from 'react'
import Logo from '../../OLX_logo_logotype_emblem.png'

const Buysell = () => {
    return (
        <div className="page2">
            <img height='200px' width='200px' src={Logo} alt=""></img>
            <h1>Welcome to OLX!!</h1>
            <h3>Please select one of the option</h3>

            <a href=""><input type="button" id ="button" value="Buy"></input></a>
            <hr></hr>
            <a href="./sell.js"><input type="button" id ="button" value="Sell"></input></a>
        </div>
    )
}

export default Buysell