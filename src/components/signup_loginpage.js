import React, { useState } from "react";
import './login.css';


const Loginpage = () => {

      const [display,setDisplay] = useState(false);
      
      const [firstname, setFirstName] = useState("");
      const [lastname, setLastName] = useState("");
      const [email,setEmail] = useState("");
      const [password,setPassword] = useState("");

      const handleSingnup = (event) => {
            event.preventDefault();
            alert (`Successfully Registered`);
      }


            const handleSubmit = (e) => {
            e.preventDefault();
            
           let a = (`welcome, ${firstname} ${lastname}`);
           
            document.write(a);
            
      } 

      return(
            <div className="container">
            <div className="box">
           
                  <div>
                        <button className="sign1" onClick={() =>setDisplay(true)}>Signup</button>
                        <button className="sign2"  onClick={() =>setDisplay(false)}>Login</button>
                  </div>
            <form onSubmit = {handleSubmit}>

            {display ? <div>
            <div>
            <h2> SignUp </h2>
            </div>
           
             <div>
                  <label htmlFor="firstname"><b> FirstNmae: </b>
                  <input type = "text" value = {firstname} onChange = {(e)=> setFirstName(e.target.value)}/>
                  </label>
                  </div>
                  <div>
           
                  <label htmlFor="lastname"><b> LastName: </b>
                  <input type = "text" value = {lastname} onChange = {(e)=> setLastName(e.target.value)}/>
                  </label>
            </div>
            <div>
                  <label htmlFor="email"><b> Email: </b></label>
                  <input type = "text" value = {email} onChange = {(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                  <label htmlFor="password"><b> Password: </b></label>
                  <input type = "password" value = {password} onChange = {(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="signUpButton">
            
         <input type="submit" />
       </div>
            

            </div> : 
            
            <div>
            <div>
            <h2> Login </h2>
            </div>

            <div>
                  <label htmlFor="email"><b> Email: </b></label>
                  <input type = "text" value = {email} onChange = {(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                  <label htmlFor="password"><b> Password: </b></label>
                  <input type = "password" value = {password} onChange = {(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="signUpButton">
                  <button type ="signin">login</button>
            </div>

            </div>
            }
            </form>
            
            </div>
            </div>
     
      );
      
      }

      export default Loginpage;




      

/*const [data,setData] = useState({
    username : '',
    password : ''
});

const {username, password} = (data);


return(
    <div>
        <center>
            <form>
                <input type = "text" name = "username" value = {username} />
                <input type = "text" name = "password" value = {password} />            
                <input type = "submit" name = "submit" />            
                            
                            
            </form>
        </center>
    </div>
)

}
export default Loginpage; */









































/*var Parent  = React.createClass({
    getInitialState:function(){
      return {signup:false,login:true}
    },
    switch:function(word){
      var signup,login;
      if(word == "signup"){signup = true;login = false;}
      else{login = true; signup = false;}
      return this.setState({login:login,signup:signup})
      
    },
    render:function(){
      
          var self = this;
          return (
                <div>
                        <div id="buttons">
                          <p id="signupButton" onClick={self.switch.bind(null,"signup")} className={self.state.signup ? "yellow":"blue"}>Sign In</p>
                        <p id="loginButton" onClick={self.switch.bind(null,"login")} className={self.state.login ? "yellow":"blue"}> Login</p>
                        </div>
                
                     { self.state.signup?<Signup/> : null}
                     {self.state.login? <Login /> : null}
              
               </div>
          
          )
      
      
    }
  })
  
  
  var Signup = React.createClass({
    
    
        render:function(){
          
          
              return (
              <div>
                     
                    <div id="signup">
                          <input type="text" id="first" placeholder="First Name"/>
                          <input type="text" id="last" placeholder="Last Name"/>
                          <input type="email" id="email" placeholder="Email"/>
                      <input type="password" id="password" placeholder="Password"/>
                      <input type="password" id="confirm" placeholder="Confirm Password"/>
                      <button id="send">Send</button>
              </div>
                  </div>
              
              )
        }
  })
  
  var Login = React.createClass({
        render:function(){
          
          
          
              return (
              
                    <div>
                                
                   <div id="login">
                      <input type="email" id="email" placeholder="Email"/>
                      <input type="password" id="password" placeholder="Password"/>
                      <button id="send">Send</button>
              </div>
                  
                    </div>
                
              )
        }
  })
  
  
  ReactDOM.render(<Parent/>,document.getElementById("space")) */