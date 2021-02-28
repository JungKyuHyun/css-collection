import { useCallback, useEffect, useState } from 'react';
import { DomUtils } from '../utils';

function useScreenSize() {
  const [size, setSize] = useState({ width: document.body.clientWidth, height: document.body.clientHeight });

  const resize = useCallback(() => {
    setSize((pre) => ({ ...pre, width: document.body.clientWidth, height: document.body.clientHeight }));
  }, []);

  useEffect(() => {
    if (!DomUtils.usableWindow()) return;
    window.addEventListener('resize', resize, false);
    resize();
    return () => window.removeEventListener('resize', resize, false);
  }, [resize]);

  return { stageWidth: size.width, stageHeight: size.height };
}

export default useScreenSize;
