import React, {Component} from 'react';

import Buysell from './components/forms/buysell';
import './components/forms/buysell.css'



// import Sell from './components/forms/sell';
// import './components/forms/sell.css'


// import BasicForm1 from './components/forms/loginpage'
// import './components/forms/loginpage.css';
// import './components/forms/loginpage.js';

// import BasicForm2 from './components/forms/signup'
// import './components/forms/signup.css';
// import './components/forms/signup.js';



class App extends Component{
  render(){
    return (
      <div className="App">
        <Buysell />
        {/* <BasicForm1 /> */}
        {/* <BasicForm2 /> */}

        


        {/* <Sell /> */}

      
      </div>
    );
  }
}

export default App
