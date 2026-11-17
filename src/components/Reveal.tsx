import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type RevealProps = {
    children: ReactNode
    delay?: number
    className?: string
}

/** Gentle fade-up when the element scrolls into view. */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
    const reduceMotion = useReducedMotion()

    return (
        <motion.div
            className={className}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}
