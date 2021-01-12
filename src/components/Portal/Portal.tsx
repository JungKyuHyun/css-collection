import { memo, FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  className?: string;
  element?: string;
}

export const Portal: FC<PortalProps> = memo(({ children, className = 'jacob-portal', element = 'div' }) => {
  const [container] = useState(() => {
    const el = document.createElement(element);
    el.classList.add(className);
    return el;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
});
