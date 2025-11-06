import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-20 h-20 rounded-full 
                 pointer-events-none mix-blend-lighten opacity-40 
                 bg-[#F3FE00] blur-[25px] will-change-transform 
                 z-20 transition-transform duration-100 ease-linear"
            animate={{
                x: pos.x - 40, // center offset
                y: pos.y - 40,
            }}
        />
    );
};

export default CursorGlow;