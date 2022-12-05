import React from 'react'
import '../../css/Chat.css'
import { MdOutlineSearch } from 'react-icons/md'

const ActiveChats = ({isActive, handleSearch, users}) => {
  return (
      <>
      {/* User currently chats  */}
      <div className='app_chat-page_left'>
            {/* current user info  */}
            <div className='app_chat_search-users-container'>
                  <input type="search" name="search" id="search-users" className='app_input-users-search' placeholder='Search or start a new chat' />
                  <div className='app_chat_btn-container'>
                        <button className='app_input-users-search-btn' type='button' onClick={handleSearch} ><MdOutlineSearch size={28} className="chat-search-icon"/></button>
                  </div>
            </div>
            {/* mapping the chats the current user has */}
            {users.length > 0 
                  ? <>
                        {users.map(()=>(
                              <div className='app_chat-page_left-userContent'>
                                    <div className='app_chat-page_left-userContent-img-container'>
                                          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" className='app_chat-page_left-userContent-img' alt="" />
                                          {/* user bubble checking */}
                                          { isActive 
                                                ? <div className='user_on'></div> 
                                                : <div className='user_off'></div>
                                          }
                                    </div>
                                    <div className='app_chat-page_left-userContent-info'>
                                          <div className='app_chat-page_left-info'>
                                                <p className='app_chat-users-name'>user name</p>
                                                {/* if the user has a chat with this user, otherwise empty */}
                                                <p className='app_chat-last-message'>last message </p>
                                          </div>
                                          {/* if current user never had a chat with this person, otherwise empty */}
                                          <div style={{textAlign: 'right'}}>
                                                <p className='app_chat-unread-messages'>8:00 pm</p>
                                                {/* POP up if user has unread message */}
                                                <span className='app_chat-unread-messages-bubble'>05</span>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </>
            : <>
                  <div className='app_chat_no-active-users'>
                        <p>Search above for some people to chat with.</p>
                  </div>
              </>}
      </div>
      </>
  )
}

export default ActiveChats