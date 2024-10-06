import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, containerRef }) => {
    const [isMounted, toggleMounted] = useState(false);
    useEffect(() => {
        toggleMounted(true);
    }, []);
    if (!isMounted) return null;
    return createPortal(
        <>{children}</>,
        containerRef?.current || window.document.body
    );
}

export default Portal;