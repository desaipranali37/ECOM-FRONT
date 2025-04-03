
import { createContext } from "react";


export const ThemeContext = createContext()


export const ThemeProvider = ({Children})=>{
    const [darkmode,setDarkmode]=useState(false)
    return(
        <ThemeContext.Provider value={{darkmode,setDarkmode}}>
            {Children}
        <ThemeContext.Provider/>
    )   
}