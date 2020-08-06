import React from 'react';
import $ from 'jquery';
import axios from "axios";
import * as firebase from 'firebase';
import config from './config.js';
import '../Components/components.css';
import '../App.css';

class Message extends React.Component{
    constructor () {
        super();
        // if(firebase.apps.length===0){
        //     firebase.initializeApp(config);
        //     this.database=this.app.database().ref().child('message');
        // }

        this.state = {
            messages:[],
            text: "",
        }
    }
    // state = {
    //     messages:[],
    //     text: "",
    // }
    // gotData = (data) =>{
    //     console.log(data);
    // }


    componentDidMount() {
        // this.getMessageHandle();
        const root = firebase.database().ref().child('message');
        const text = root.child('text');

        text.on('value',snap=>{
            this.setState({
                messages:snap.val()
            });
        });
    }

    inputHandle = (e) =>{
        this.setState({
            text: e.target.value,
        });
    }

    // componentDidlMount(){
    //     axios.get("https://frameworks-final.firebaseio.com/message.json",
    //     ).then((res)=>{
    //       console.log(res);
    //       this.setState({messages: res.data});
    //     }).catch((err)=>{
    //       console.log(err);
    //     });
    // }

    // componentDidUpdate(){
    //     axios.get("https://frameworks-final.firebaseio.com/message.json",
    //     ).then((res)=>{
    //       console.log(Object.keys(res.data));
    //       console.log(res.data);
    //     //   this.setState({messages: Object.values(snapshot.val().category)})
    //     this.setState({messages: res.data })
    //     }).catch((err)=>{
    //       console.log(err);
    //     });
    // }

    postMessageHandle = (input) => {
      axios.post("https://frameworks-final.firebaseio.com/message.json",{
          text: this.state.text,
      }).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    };
    
    // addHandle=(i)=>{
    //     this.setState((prevState)=> ({
    //         messages:[
    //             ...prevState.messages,
    //             {theID: }
    //         ]
    //     }))
    // }
    getMessageHandle = () => {  
        axios.get("https://frameworks-final.firebaseio.com/message.json")
        .then(({data})=>{
            console.log(data);
            console.log(data.name);
            // Object.keys(data).map((item,i)=>{
            //     data[item].map((body,index)=>{
            //         this.setState({mesages:body.text})
            //     })
            // });
            // console.log(this.state.messages);
        //     Object.keys(data).map((item,i)=>{
        //             // data[item].map((body,index)=>{
        //             //     this.setState({
        //             //         messages: body.text,
        //             //     })
        //             //     )}
        //             // })
        })
        .catch((err)=> {})
        // .then(res=>{          
        //   console.log(Object.keys(res.data));
        //   console.log(res);
        //   this.setState({messages: res});
        //   Object.keys(this.state.messages);

        // }).catch((err)=>{
        //   console.log(err);
        // });
    }

    render(){
        const {messages}=this.state;
        return(
        <div className='message'>
            <h1>Message Board</h1>
            <div id='addMessage'>
                <input onChange={(e) => this.inputHandle(e)}></input>
                <button className='mbutton' onClick={() =>this.postMessageHandle(this.state.text)}>Post Message</button>
            </div>
            <div className='text'>
                {/* {this.state.messages.forEach(message =>
                    {message.text})} */}
                {/* {this.getMessageHandle()} */}
                {/* messages.map(message=>) */}
                {/* {Object.keys(this.state.messages).map((item,i)=>{
                    <div key={i}>
                        {this.state.messages[item].map((body,index)=>
                            <div key={index}>{body.text} </div>
                        )}
                    </div>
                })} */}
                {/* {this.state.messages.map((message, Object.getKey(message)) => {
                    return (
                        <div key={index}>
                            {message.body.text}
                        </div>
                    );
                })} */}
                {/* {this.state.messages} */}
                {/* {this.state.messages.map((message, index) => {
                    return (
                        <div>
                            {message}
                        </div>
                    );
                })} */}
            </div>
        </div>
        )
    }
  }

  export default Message;