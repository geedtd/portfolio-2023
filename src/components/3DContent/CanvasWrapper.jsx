import React from "react";
import { useThree } from "@react-three/fiber";

export default function CanvasWrapper({ children }) {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <canvas
            style={{
                width: `${viewport.width}px`,
                height: `${viewport.height}px`,
                transformOrigin: 'top left',
                transform: `scale(${aspect})`,
            }}
            >
            {children}
            </canvas>
        </div>
    );
};
