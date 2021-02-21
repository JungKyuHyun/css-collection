import { useCallback, useEffect, useState } from "react";
import { DomUtils } from "../utils";

function useScreenSize() {
  const [width, setWidth] = useState(document.body.clientWidth);
  const [height, setHeight] = useState(document.body.clientHeight);

  const resize = useCallback(() => {
    setWidth(document.body.clientWidth);
    setHeight(document.body.clientHeight);
  },[]);



  useEffect(() => {
    if(!DomUtils.usableWindow()) {
      return;
    }
    resize();    
    window.addEventListener('resize', resize, false);
    return () => window.removeEventListener('resize', resize, false);
  },[resize])

  return { width, height }
}

export default useScreenSize;