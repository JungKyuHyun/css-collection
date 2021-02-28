import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { DomUtils } from '../utils';

function useScreenSize() {
  const [size, setSize] = useState({ width: document.body.clientWidth, height: document.body.clientHeight });

  useEffect(() => {
    if (!DomUtils.usableWindow()) return;

    const resize = debounce(() => {
      setSize((pre) => ({ ...pre, width: document.body.clientWidth, height: document.body.clientHeight }));
    }, 400);

    window.addEventListener('resize', resize, false);
    resize();
    return () => window.removeEventListener('resize', resize, false);
  }, []);

  return { stageWidth: size.width, stageHeight: size.height };
}

export default useScreenSize;
