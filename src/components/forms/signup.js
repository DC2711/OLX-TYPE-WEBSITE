import React, { useState } from 'react'
import Logo from '../../OLX_logo_logotype_emblem.png'


const BasicForm2 = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");

    const [allEntry, setAllEntry] = useState([]);
    const SubmitForm=(e) =>{
        e.preventDefault();
        const newEntry = {email:email,password:password, name:name};

        setAllEntry([...allEntry,newEntry]);   // 3 dots keep all the entries from beginning
        console.log(allEntry);
    }

   
    return (
        <div className="Form">
            <img  src={Logo} alt=""></img>
            <form action="" onSubmit={SubmitForm} >
                <h1>Welcome New User!!!</h1>
                <h4>Please Enter the Details</h4>

                <div>
                    <label htmlFor="name"> Name:  </label>
                    <input type="text" className="input" name="name" id="name" autoComplete="off"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <br></br>

                <div>
                    <label htmlFor="email"> Email:  </label>
                    <input type="text" className="input" name="email" id="email" autoComplete="off"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>
                <br></br>

                <div>
                    <label htmlFor="password">Password:  </label>
                    <input type="password" className="input" name="password" id="password" autoComplete="off"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>
                <br></br>

                <a href="./buysell.js"><input type="button" id ="button" value="SignUp"></input></a>

            </form>
        </div>

    
    )
}

export default BasicForm2