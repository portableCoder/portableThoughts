import { useEffect,useRef, useState } from "react";
import isBrowser from "./isBrowser";
const getIsMobile = () => window.innerWidth <= 768;

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState<boolean>();

    useEffect(() => {
        if(!isMobile){
        setIsMobile(getIsMobile())
        }

        const onResize = () => {
            setIsMobile(getIsMobile());
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    return isMobile;
    
}