import React, { createContext, useContext, useState } from 'react';
import { user_data } from '../Data/Data';
import { useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [user, setUser] = useState();

    useEffect(() => {
      const getuserdetails = async() =>{
        try {
          const response = await fetch('https://6410036b864814e5b644b6f5.mockapi.io/users',{
          method : "GET"
        });
        const data = await response.json();
        // console.log(data);
        setUser(data);
        if(!data){
          console.log("no data");
        }  
        } catch (error) {
          console.log(error);
        }
        
      }
      getuserdetails();
    }, []);
  return (
    <AppContext.Provider
        value={{
            user,
            setUser
        }}
    >
        {children}

    </AppContext.Provider>
  );
}

export const AppState = () => { 

  return useContext(AppContext) 

};

export default AppProvider;