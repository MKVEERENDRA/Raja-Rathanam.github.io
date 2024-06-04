// src/hooks/useExternalResource.js
import { useEffect } from 'react';

const useExternalResource = (href, src) => {
  useEffect(() => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = href;
    document.head.appendChild(stylesheet);

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(stylesheet);
      document.body.removeChild(script);
    };
  }, [href, src]);
};

export default useExternalResource;
