import React from 'react';
import Image from './Image';
import '../Components/components.css';
import '../App.css';

class Home extends React.Component{

    render(){
        return(
        <div className='Home'>
            <h1>Welcome</h1>
            <Image source={"./jansenPortrait.jpeg"} />
        </div>
        )
    }
  }

  export default Home;