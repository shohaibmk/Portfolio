"use client"

import Landing from "./landing.jsx"
import { motion, useSpring, useScroll } from "motion/react"
import { useEffect } from "react"
import { initializeAnalytics } from "../firebase/analytics"

export default function ScrollLinked() {
    useEffect(() => {
        initializeAnalytics();
    }, []);

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <>
            <motion.div
                id="scroll-indicator"
                className="bg-[#ef9c82]"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                }}
            />
            <Content />
        </>
    )
}

function Content() {
    return (
        <>
            <Landing />
        </>
    )
}
