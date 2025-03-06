"use client"

import Link from "next/link"
import { unstable_ViewTransition as ViewTransition } from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from "@/app/utils/motion"
import SpotlightCard from "@/app/ui/SpotlightCard"
import { useTheme } from '@/app/context/ThemeContext'
import Orb from '@/app/ui/Orb'

export default function PostList() {
  const { theme } = useTheme();
  
  // 根据主题设置不同的聚光灯颜色
  const spotlightColor = theme === 'dark' 
    ? "rgba(16, 185, 129, 0.15)" // primary-500 color with opacity
    : "rgba(99, 102, 241, 0.15)"; // secondary-500 color with opacity
  
  // 为 Orb 设置合适的色调
  const orbHue = theme === 'dark' ? 160 : 220; // 绿色或蓝色
    
  return (
    <>
      {/* 背景 Orb */}
      <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
        <Orb
          hue={orbHue}
          hoverIntensity={0.2}
          rotateOnHover={true}
          forceHoverState={false}
          brightness={0.1}
        />
      </div>
      
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate="show"
        className="py-8 sm:py-12 relative z-10"
      >
        <ViewTransition name="posts" className="via-blur" exit="duration-100">
          <motion.div variants={fadeIn('up', 0.3)} className="grid gap-8">
            <motion.h1 
              variants={textVariant(0.1)}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-light-100 mb-2"
            >
              Blog posts
            </motion.h1>
            
            <motion.p 
              variants={fadeIn('up', 0.2)}
              className="text-light-300 max-w-2xl mb-8"
            >
              Exploring the latest in web development, UI design, and Next.js
            </motion.p>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => {
                const id = index + 1
                return (
                  <motion.div
                    key={id}
                    variants={fadeIn('up', 0.2 + index * 0.1)}
                  >
                    <SpotlightCard 
                      className="overflow-hidden p-0 h-full"
                      spotlightColor={spotlightColor}
                    >
                      <Link
                        href={`/blog/${id}`}
                        className="flex flex-col h-full p-5 text-light-300 hover:text-light-100 transition-colors duration-300"
                      >
                        <ViewTransition
                          name={`post-${id}`}
                          className="via-blur"
                          exit="duration-100"
                        >
                          <div className="aspect-video bg-gradient-to-br from-primary-800/30 to-secondary-800/30 rounded-xl mb-4" />
                        </ViewTransition>
                        <div className="space-y-3">
                          <h3 className="text-lg font-medium text-light-200">Blog Post Title {id}</h3>
                          <div className="flex gap-2 text-xs text-light-400">
                            <span>Mar {id + 10}, 2024</span>
                            <span>•</span>
                            <span>{3 + id} min read</span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-current rounded-lg h-[0.4lh]" />
                            <div className="bg-current rounded-lg h-[0.4lh]" />
                            <div className="bg-current rounded-lg h-[0.4lh] w-2/3" />
                          </div>
                          <div className="flex gap-2 mt-4 pt-4 border-t border-white/5">
                            <span className="text-xs px-2 py-1 rounded-full bg-primary-900/30 text-primary-300">Next.js</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-secondary-900/30 text-secondary-300">React</span>
                          </div>
                        </div>
                      </Link>
                    </SpotlightCard>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </ViewTransition>
      </motion.div>
    </>
  )
}
