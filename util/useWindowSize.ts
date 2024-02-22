import { useEffect,useState}  from "react";

export default function useWindowSize() {


  const [windowSize, setWindowSize] = useState({width:innerWidth,height:innerHeight});

    useEffect(() => {
      const onResize  = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }
    window.addEventListener("resize",onResize );
    return ()=>{
      window.removeEventListener("resize",onResize)
    }
  }, []);
  return windowSize
}
