import React from 'react'
import '../../css/Profile.css'

const MyProfile = ({}) => {
  return (
      <div className='app_myProfile-container'>
            <div className='app_myProfile'>
                  <img 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" 
                        alt="my profile picture" 
                        className='app_profile-img'
                  />
                  <h2>USER NAME</h2>
                  <h4>pronouns</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper dolor rhoncus augue tempor elementum. Morbi ac ante eu ipsum elementum dictum eu eu tortor. Maecenas ligula est, fringilla sed lobortis et, tristique non lorem. Maecenas quis nunc bibendum, lacinia nulla in, suscipit ligula. Nulla enim dolor, luctus non sollicitudin at, blandi 23</p>
            </div>
            <div className='app_myProfile-form'>
                  
                   {/* change profile picture */}
                   <div className='app_profile-change-profileImg'>
                        <label htmlFor="profile-image">New Profile Picture</label>
                        <input type='file' name='new-profile-image' />

                  </div>
                  {/* edit Pronouns */}
                  <div className='app_profile-change-pronouns'>
                        <label htmlFor="pronouns">Pronouns</label>
                        <div className=''>
                              <select name="pronouns" id="pronouns">
                                    <option value="x"></option>
                                    <option value="he/him/his">he/him/his</option>
                                    <option value="she/her/hers">she/her/hers</option>
                                    <option value="they/them/theirs">they/them/theirs</option>
                                    <option value="zie/zir/zirs">zie/zir/zirs</option>
                              </select>
                        </div>
                  </div>
                  {/* edit password */}
                  <div className='app_profile-change-password'>
                        <label htmlFor="new-password">Change Password</label>
                        <div>
                              <input type="password" name='new-password' />
                              <button>Change Password</button> 
                        </div>
                  </div>
                  {/* edit Bio */}
                  <div className='app_profile-change-bio'>
                        <label htmlFor="bio">Bio</label>
                        <div>
                              <textarea type="text" name='bio'  maxlength="360"/>
                              <div><button>Change Bio</button></div> 
                        </div>
                        

                  </div>
            </div>
      </div>
  )
}

export default MyProfile