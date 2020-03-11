import React from 'react'
import './index.css'
import  img1 from './images/41EpGHYVvkL.png'
import close from './images/fe0abd829d.png'
import flower from './images/download.jpg'
class Home extends React.Component{
          constructor(props){
                    super(props)
                    this.state={
                              message:"",
                              chat:[],
                              flag:false
                    }
          }
          handleChange=(e)=>{
               this.setState({
                              [e.target.name] : e.target.value,
                    })
          }
          handleEnter=(e)=>{
                    if(e.key === 'Enter'){
                              this.setState({
                                        message:"",
                                        chat:this.state.chat.concat(this.state.message),
                              })
                    }
          }
          handleChatbox=(e)=>{
                 this.setState({flag:!this.state.flag})
          }
          render(){                    
                    return(
                              <div className="main-container">
                                        <div className="nav-container">
                                               <h3 style={{textAlign: "justify",letterSpacing: "3px",lineHeight: "0.8",color: "blanchedalmond",margin: 0,transform: "translateY(25px)",fontSize:"2.1em"}}>Conversational Agent</h3>
                                        </div>
                                        {
                                               
                                                  this.state.flag? <div className="chat-comp">
                                                  
                                                  {
                                                             this.state.chat.map((message, index)=>{
                                                                      return <div key={index} className={index%2==0?"A-message":"B-message"}>{message}</div>
                                                            })
                                                  }
                                                  <div className="input-content">
                                                         <input 
                                                                   name="message" 
                                                                   type="text"
                                                                   style={{width:"inherit",height:"inherit"}}
                                                                   value={this.state.message} 
                                                                   onChange={(e)=>this.handleChange(e)}
                                                                   onKeyDown ={(e)=>this.handleEnter(e)}
                                                                   placeholder="Type your message here..."
                                                         />
                                                  </div>
                                               </div>:<div>
                                                      <img style={{height:"50px",width:"50px",margin:"12% 0 0 48%"}} onClick={this.handleChatbox} src={img1}/>
                                                           <p>Let's chat with our robot...</p>
                                                           </div>
                                        }
                                       
                              </div>
                    )
          }
}
export default Home