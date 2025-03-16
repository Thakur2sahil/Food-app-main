import * as React from 'react'

const appContext = React.createContext();

export const useApp = () => {
  return React.useContext(appContext)
}

const Appprovider = ({ children }) => {

   const [currStateModal, setCurrStateModal] = React.useState({
     error: false,
     success: false,
     loading: false,
     message: "",
   });
  
  return (
    <appContext.Provider
      value={{
        currStateModal,
        setCurrStateModal
    }}
    >

    </appContext.Provider>
  )
  
}

