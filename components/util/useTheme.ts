import React, { useEffect, useState } from 'react';
import { replaceAll } from './createLink';
type Theme = "light"|"dark"
type ThemeType = {
    bg:string,
    color:string
}
const ThemeStyle : Record<Theme,ThemeType>  = {
    
    dark:{
        bg:'#111216',
        color:"white"
    },
    light:{
        bg:"#f8fafc",
        color:"black"
    }

}
const storeKey = "theme"
const useTheme = (setBackground?:boolean) => {
    const getThemeFromLocalStorage = ():Theme|undefined=>{
        const ltheme = (localStorage.getItem(storeKey) as Theme)
        return  ltheme || "dark"
    }
    const setThemeLocalStorage = (theme:Theme)=>{
        localStorage.setItem(storeKey,theme)
    }
 
    const [theme,setTheme] = useState<Theme>()
    useEffect(()=>{
        setTheme(getThemeFromLocalStorage())
    },[])

    useEffect(()=>{
        if(theme){
            setThemeLocalStorage(theme)
            if(theme === "dark"){
             document.body.classList.add("dark")

            } 
            else { 
            
                document.body.classList.remove("dark")
            }

            if(setBackground){
                document.body.style.backgroundColor = ThemeStyle[theme].bg
              
        
                }
        }
    },[theme])
    //@ts-ignore
let themeState : [Theme, typeof setTheme] = [theme,setTheme] 
  return themeState
};

export default useTheme;
