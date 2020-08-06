import React from 'react';
import Image from './Image';
import LocalImg from './jansenPortrait.jpg';
import '../Components/components.css';
import '../App.css';

class Home extends React.Component{

    render(){
        return(
        <div className='Home'>
            <h1>Welcome</h1>
            <Image source={LocalImg} />
        </div>
        )
    }
  }

  export default Home;