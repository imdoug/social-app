import React,{useState} from 'react'
import { ActiveChats, CurrentChat, PageHOC } from '../components'
import '../css/Chat.css'

const Chat = () => {
      const userProperties = {
            sender: false
      }
      const userArray = []
      const [notifications, setNotifications] = useState(false)
      const [isOn, setIsOn] = useState(false)
      const [currentChat, setCurrentChat] = useState(true)
      const handleSearch = () =>{

      }
  return (
    <div className='app_chat-page_container'>
      <ActiveChats isActive={isOn} handleSearch={handleSearch} users={userArray}/>
      <CurrentChat currentChat={currentChat} user={userProperties}/>
    </div>
  )
}

export default PageHOC(
      Chat
)