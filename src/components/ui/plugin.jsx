// components/DraggableComponent.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { EaselPlugin } from 'gsap/EaselPlugin';

gsap.registerPlugin(Draggable, EaselPlugin);

const DraggableComponent = ({children}) => {
    const boxRef = useRef(null);

    useEffect(() => {
        // Draggable setup
        const draggable = Draggable.create(boxRef.current);
        
        return () => {
            // Clean up
            draggable[0].kill();
        };
    }, []);

    return (
        <div>
            <h2>Drag Me!</h2>
            <div 
                ref={boxRef} 
                
            />
            {children}
        </div>
    );
};

export default DraggableComponent;
