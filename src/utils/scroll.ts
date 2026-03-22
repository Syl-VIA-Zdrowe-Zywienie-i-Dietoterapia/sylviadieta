// src/utils/scroll.ts

type ScrollCallback = (scrollY: number) => void;

const callbacks = new Set<ScrollCallback>();
let ticking = false;

function handleScroll() {
    const scrollY = window.scrollY;
    for (const callback of callbacks) {
        callback(scrollY);
    }
    ticking = false;
}

export function onScroll(callback: ScrollCallback): () => void {
    if (callbacks.size === 0) {
        window.addEventListener(
            "scroll",
            () => {
                if (!ticking) {
                    window.requestAnimationFrame(handleScroll);
                    ticking = true;
                }
            },
            { passive: true },
        );
    }

    callbacks.add(callback);

    return () => callbacks.delete(callback);
}
