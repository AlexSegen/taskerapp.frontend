import React, { createContext, useState } from 'react';

const AppContext = createContext()

const AppContextProvider = ({children}) => {

    const [openSidebar, setOpenSidebar] = useState(false);

    return (<AppContext.Provider  value={{openSidebar, setOpenSidebar}}>
                {children}
            </AppContext.Provider>)
}

export default AppContextProvider;