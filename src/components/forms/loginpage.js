import React, { useState } from 'react';
import Logo from '../../OLX_logo_logotype_emblem.png';



const BasicForm1 = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);
    const SubmitForm=(e) =>{
        e.preventDefault();
        const newEntry = {email:email,password:password};

        setAllEntry([...allEntry,newEntry]);   // 3 dots keep all the entries from beginning
        console.log(allEntry);
    }

   
    return (
        <div className="Form">
            <img src={Logo} alt=""></img>
            <br></br>

            <h1>Welcome User!!!</h1>
            
            <form action="" onSubmit={SubmitForm} >
                <div>
                    <label htmlFor="email" id="email" > Email: </label>
                    <input type="text" className="input" name="email" autoComplete="off"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>
                <br></br>

                <div>
                    <label htmlFor="password" id="password">Password: </label>
                    <input type="password" className="input" name="password" autoComplete="off"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>
                <br></br>

                <a href="./buysell.js"><input type="button" id ="button" value="Login"></input></a>
                

            </form>
            <p>
                New User?
                <a href = "./signup.js">  SignUp Now!</a>
            </p>
        </div>

    
    )
}

export default BasicForm1
