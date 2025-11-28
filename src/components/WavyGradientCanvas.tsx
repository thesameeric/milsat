"use client"

import { useEffect, useRef } from 'react';

export function WavyGradientCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false);

    useEffect(() => {
        // Prevent multiple initializations
        if (hasInitialized.current) return;

        const initUnicornStudio = () => {
            if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false, init: () => { } };
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
                script.async = true;
                script.onload = () => {
                    if (!window.UnicornStudio.isInitialized) {
                        window.UnicornStudio.init();
                        window.UnicornStudio.isInitialized = true;
                        hasInitialized.current = true;
                    }
                };
                (document.head || document.body).appendChild(script);
            } else if (window.UnicornStudio.isInitialized && !hasInitialized.current) {
                // Defer init to next tick to avoid blocking
                requestAnimationFrame(() => {
                    window.UnicornStudio.init();
                    hasInitialized.current = true;
                });
            }
        };

        // Use requestIdleCallback for non-blocking initialization, fallback to setTimeout
        if ('requestIdleCallback' in window) {
            requestIdleCallback(initUnicornStudio);
        } else {
            setTimeout(initUnicornStudio, 100);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            data-us-project="X0ErZR3QhPzMHfKgBbJJ"
            className="absolute top-0 left-0 -z-10 w-full h-full rounded-2xl"
            style={{ willChange: 'auto', contain: 'layout style paint' }}
        />
    );
}

// Extend Window interface for TypeScript
declare global {
    interface Window {
        UnicornStudio: {
            isInitialized: boolean;
            init: () => void;
        };
    }
}
