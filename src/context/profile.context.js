import React, { useEffect,createContext, useContext, useState } from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext=createContext();
export const ProfileProvider = ({children}) => {
    const [profile,setProfile]=useState(null);
    const [isLoading,setisLoading]=useState(true)
    useEffect(() => {
        let userRef;

        const authUnsub = auth.onAuthStateChanged( authObj  =>{

            if(authObj){
                  
                userRef=database.ref(`/profiles/${authObj.uid}`);
                userRef.on('value',snap=>{
                        
                    const {name,createdAt} = snap.val()
                   
                    const data= {
                        name,
                        createdAt,
                        uid: authObj.uid,
                        email:authObj.email
                    }
                    //  console.log(data); 
                      setProfile(data);
                      setisLoading(false);
                 })

            }else{
                
                if(userRef)
                 userRef.off();

                setProfile(null);
                setisLoading(false);
            }
        })
       return ()=>{
          authUnsub();
          if(userRef)
           {
             userRef.off();   
           } 
       } 
    }, [])
    
    
    
    return(

  <ProfileContext.Provider value={{profile,isLoading}}>
      {children}
  </ProfileContext.Provider>
    )

}

export const useProfile= () => useContext(ProfileContext);