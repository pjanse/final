import React from 'react';
import axios from "axios";
import '../Components/components.css';
import '../App.css';

class Message extends React.Component{

    state = {
        keys:[],
        messages:[],
        text: "",
    }


    componentDidMount() {
        this.getMessageHandle();
    }

    inputHandle = (e) =>{
        this.setState({
            text: e.target.value,
        });
    }

    postMessageHandle = (input) => {
      axios.post("https://frameworks-final.firebaseio.com/message.json",{
          text: this.state.text,
      }).then((res)=>{
        console.log(res);
        this.getLast();
      }).catch((err)=>{
        console.log(err);
      })
    };

    getLast = () => {
        axios.get("https://frameworks-final.firebaseio.com/message.json")
        .then(({data})=>{
            var key = Object.keys(data)[Object.keys(data).length-1];
            this.setState((prevState)=>({
                messages:[
                    ...prevState.messages,
                    data[key].text,
                ]
            }))
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    getMessageHandle = () => {  
        axios.get("https://frameworks-final.firebaseio.com/message.json")
        .then(({data})=>{
            this.setState({
                keys: Object.keys(data)
            })
            console.log(Object.keys(data));
            console.log(Object.keys(data).length)
            console.log(data);
            for(var i = 0; i<Object.keys(data).length;i++){
               var key = Object.keys(data)[i];
                this.setState((prevState)=>({
                    messages:[
                        ...prevState.messages,
                        data[key].text,
                    ]
                }))
                console.log(this.state.messages[i]);
            }
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    render(){
        return(
        <div className='message'>
            <h1>Message Board</h1>
            <div id='addMessage'>
                <input onChange={(e) => this.inputHandle(e)}></input>
                <button className='mbutton' onClick={() =>this.postMessageHandle(this.state.text)}>Post Message</button>
            </div>
            <div className='text'>
                {this.state.messages.map((message,index) => {
                    return (
                        <div key={index} id='message'>
                            {message}
                        </div>
                    );
                })}
            </div>
        </div>
        )
    }
  }

  export default Message;