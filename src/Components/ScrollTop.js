import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const routePath = useLocation();

    useEffect(()=>{
        (()=>{
            window.scrollTo(0,0);
        })();

    },[routePath]);

    return null;

};

export default ScrollTop;