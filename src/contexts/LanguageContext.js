//------Redux is implemented instead of Context API for the language selection

// import React, { useState,createContext, useEffect } from 'react'
// import { trText } from '../languages/tr';
// import { enText } from '../languages/en';

// export const LanguageContext = createContext();

// const LanguageContextProvider = ({ children }) => {
  
//   const[userLang,setUserLang]=useState(true);
//   const [UIText, setUIText] =useState({});

//   useEffect(()=>{

//     userLang ? setUIText({...trText}) : setUIText({...enText});

  
//     console.log(userLang)
   
//     console.log(trText)


//   },[userLang])

//   console.log("UIText",UIText)




//   return (
//     <LanguageContext.Provider value={{UIText}}>
//       {children}
//     </LanguageContext.Provider>
//   )
// }

// export default LanguageContextProvider

