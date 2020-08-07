import React from 'react';
import '../App.css';

class About extends React.Component{

    render(){
        return(
        <div className='About'>
            <h1>Project Information</h1>
            <div>
                This project was created for Web Frame Works at the University of Arkansas Fort Smith.  I have
                created an online host through github and implemented react router for single page routing.  The message
                board page will accept text and create a data entry on firebase.  I was unable to pull the data from the
                server and post it to the page however. 
            </div>
        </div>
        )
    }
  }

  export default About;