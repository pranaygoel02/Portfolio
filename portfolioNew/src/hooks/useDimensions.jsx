import { useState, useCallback, useRef } from 'react';

export default function useDimensions() {
    const [dimensions, setDimensions] = useState({});
    const ref = useRef(null);
    const observer = useRef(null);

    const setRef = useCallback(node => {
        if (ref.current && observer.current) {
            observer.current.unobserve(ref.current);
        }
        if (node !== null) {
            observer.current = new ResizeObserver(entries => {
                const rect = entries[0].contentRect;
                setDimensions(rect);
            });
            observer.current.observe(node);
        }
        ref.current = node;
    }, []);

    return [setRef, dimensions, ref];
}