"use client"

import { Header } from "@/app/ui/header"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/utils/motion"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      animate="show"
      className="grid gap-6 sm:gap-12 py-6 sm:py-12"
    >
      <motion.div variants={fadeIn('down', 0.1)}>
        <Header isCollapsed={true} />
      </motion.div>
      <motion.div variants={fadeIn('up', 0.2)}>
        {children}
      </motion.div>
      
      <motion.footer 
        variants={fadeIn('up', 0.3)}
        className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-light-300/60"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <a href="#" className="hover:text-primary-400 transition-colors duration-300">Terms</a>
          <a href="#" className="hover:text-primary-400 transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-primary-400 transition-colors duration-300">GitHub</a>
          <a href="#" className="hover:text-primary-400 transition-colors duration-300">Twitter</a>
        </div>
        <div className="mt-6">
          © {new Date().getFullYear()} • Built with Next.js and View Transitions
        </div>
      </motion.footer>
    </motion.div>
  )
}
