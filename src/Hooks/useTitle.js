import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Toy Zone | ${title}`;
    },[title])
}

export default useTitle;