import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <DataContext.Provider value={{sidebar, setSidebar}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataProvider, DataContext}