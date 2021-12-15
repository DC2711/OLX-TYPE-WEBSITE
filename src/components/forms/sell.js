import React from 'react'
import Logo from '../../OLX_logo_logotype_emblem.png'

const Sell = () => {
    return (
        <div className="page3">
            <img height='200px' width='200px' src={Logo} alt=""></img>
            <h2>Welcome to OLX!!</h2>
            <h3>Please fill the following details:</h3>

           
            <div>
                <h4>Product Details: </h4>
                <label htmlFor="pname" id="pname"> Type of product: </label>
                <input type="text" className="input" name="pname"  autoComplete="off"></input>
                <br></br>

                <label htmlFor="age" id="age"> Age of Product(in yrs): </label>
                <input type="number" onKeyPress={"return"} className="input" name="age"  autoComplete="off" />
                <br></br>

                <label htmlFor="pimage" id="pimage"> Upload the image of the product: </label>
                <input type="image" className="input" name="pimage"  />
                <br></br>

                <h4>Personal Details: </h4>
                <label htmlFor="address" id="add"> Address: </label>
                <input type="text" className="input" name="address"  autoComplete="off" />
                <br></br>

                <label htmlFor="number" id="num"> Contact No: </label>
                <input type="tel" className="input" name="number"  autoComplete="off" />
                <br></br>
            
            </div>
   
        </div>
    )
}

export default Sell