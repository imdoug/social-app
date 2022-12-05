import React from 'react'
import { PageHOC, UsersProfile, MyProfile } from '../components'

const Profile = ({user, currentUser}) => {
  return (
    <div>
      {user === currentUser 
      // than its my profile 
      ? <>
            <MyProfile />
        </> 

      // its another user profile
      : <> 
            <UsersProfile />
        </>
      }
    </div>
  )
}

export default PageHOC(
      Profile,
)