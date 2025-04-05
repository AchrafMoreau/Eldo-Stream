import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";


export default function Title({ title, description }: { title: string, description: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  return (
     <div ref={ref} className="text-center mb-16">
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary"
        >
        {title}
        </motion.h2>
        <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 w-20 bg-primary mx-auto my-4"
        />
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed"
        >
        {description}
        </motion.p>
    </div>
  );
}