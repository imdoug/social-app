import React, { createContext, useContext, useState } from 'react'
import { auth, db, storage } from './firebase'
import {ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { setDoc, doc, getDoc, collection, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updatePassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
      const [currentUser, setCurrentUser] = useState('')
      const [userData, setUserData] = useState('')
      const [users, setUsers] = useState([])
      const navigate = useNavigate()
      const signUp = (user, pass) =>{
            createUserWithEmailAndPassword(auth, user.email, pass)
            .then( async (createdUser) =>{
                  // creating instance of user in firestore to add profile fields 
                  try {
                     const docRef = await setDoc(doc(db, 'users', createdUser.user.uid),{
                        id: createdUser.user.uid, ...user
                     })
                     console.log("Document written with ID: ", docRef)
                     getData(createdUser.user.uid)
                  } catch (e) {
                        console.error(`Error adding document:, ${e}`)
                  }
                  setCurrentUser(createdUser.user)
                  navigate('/')
                  console.log(createdUser)
            })
            .catch((error)=>{
                  console.log(error.message)
            })
      }
      const signIn = (email, password) =>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                  console.log(userCredential.user)
                  setCurrentUser(userCredential.user)
                  getData(userCredential.user.uid)
                  navigate('/')
            })
            .catch((error)=>{
                  console.log(error.message)
            })
      }
      const logout = () =>{
            signOut(auth)
            .then((success)=>{
                  console.log("success")
                  setCurrentUser(undefined)
            })
            .catch((error)=>{
                  console.log(error)
            })
      }
      const resetPassword = (email) =>{
            return sendPasswordResetEmail(auth, email)
      }
      const changePassword = (password) => {
            return updatePassword(currentUser,password)
      }
      const uploadPicture = (img) =>{
            const child = `profile-picture/${currentUser.uid}/${img.name}`
            const storageRef = ref(storage, child)
            try {
                  uploadBytes(storageRef, img).then((snapshot)=>{
                        getDownloadURL(ref(storage, snapshot.ref.fullPath)).then( async (url)=>{
                              try {
                                    const docRef = doc(db, 'users', `${currentUser.uid}`)
                                    const docSnap = await getDoc(docRef)
                                    if (docSnap.exists()) {
                                          await setDoc(docRef, {...docSnap.data(), profileImg: url})
                                          getData(currentUser.uid)
                                        } else {
                                          // doc.data() will be undefined in this case
                                          console.log("No such document!");
                                        }
                              } catch (error) {
                                    
                              }  console.log(url)
                        })
                  })
            } catch (error) {
                  console.log(error)
            }
      }
      const getData =  async (uid) =>{
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                  console.log("Document data:", docSnap.data());
                  setUserData(docSnap.data())
                  getUsers()
            } else {
            // doc.data() will be undefined in this case
                  console.log("No such document!");
            }
      }
      const getUsers =  async () =>{
            const colSnap =  await getDocs(collection(db, "users"));
            console.log(colSnap)
            let users = []
            colSnap.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  users.push(doc.data());
            })
            console.log(users)
            setUsers(users)
      }
  return (
    <AuthContext.Provider value={{currentUser, signUp, signIn, logout, resetPassword, changePassword, uploadPicture, userData, users}}>
          {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)