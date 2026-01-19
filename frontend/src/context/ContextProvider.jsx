import { createContext, useState } from "react"
import { cars } from "../data/cars";

const Context = createContext();

export default function ContextProvider({children}){
    
    const [car_listing, setCar_listing] = useState(cars)
    

    const value = {
        car_listing,
        setCar_listing
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export {
    Context,
    ContextProvider
}