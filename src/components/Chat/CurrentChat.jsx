import React from 'react'
import '../../css/Chat.css'
import { IoIosSend, IoIosAttach } from 'react-icons/io'

const CurrentChat = ({currentChat, user}) => {
  return (
      <>
           {/* chat itself  */}
           <div className='app_chat-page_right'>
           {/* if user has any chats*/}
           {currentChat 
           ? <>
                 <div className='app_chat-master-container'>
                       <div className='app_chat-container'>
                             {/* if Im the sender / if im he receiver */}
                             {user.sender 
                                   ? <>
                                         <div className='app_chat-bubble-sender'>
                                               <p>asudabosduans odinaosidnaosasdasdasdas dasdasdasdasdasdasdasdas uansodinaos idnaosasdasdasd asdas dasdasda uansodinaosidnaosasdasdasdasdasdasdasda</p>
                                         </div>
                                     </>
                                   : <>
                                         <div className='app_chat-bubble-receiver'>
                                               <div className='app_chat-bubble-img-container'>
                                                     <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" className='app_chat-bubble-img' alt="" />
                                                     <p>09:25 am</p>
                                               </div>
                                               <div className='app_chat-bubble-text'>
                                                     <p>asudabosd muansodinaosidnaosasda sdasdasdasdasdasd asdasdasdasdas uansodinaosidna osasdasdasdasdasdasdasda uansodinaosidnaosasdasdasdasdasdasdasda</p>
                                               </div>
                                         </div>
                                     </>}
                       </div>
                       <div className='chat-input-container'>
                             <div className='chat-media-btn'>
                                   <button><IoIosAttach size={28}/> </button>
                             </div>
                             <div className='chat-input'>
                             </div>
                             <div className='chat-submit-btn'>
                                   <button><IoIosSend size={28}/> </button>
                             </div>
                       </div>
                 </div>
             </>
             : <>
                 <div className="app_chat-empty-currentChat">
                             <img src="" alt="multiple-devices" />
                             <h4>APP NAME</h4>
                             <p>Send and receive messages from any device.</p>
                 </div>
           </> }
     </div>
     </>
  )
}

export default CurrentChat