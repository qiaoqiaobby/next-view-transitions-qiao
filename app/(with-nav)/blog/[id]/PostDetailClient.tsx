"use client"

import Link from "next/link"
import { unstable_ViewTransition as ViewTransition } from "react"
import { motion } from "framer-motion"
import { fadeIn, slideIn, textVariant } from "@/app/utils/motion"
import { useEffect, useState } from "react"
import Orb from '@/app/ui/Orb'
import { useTheme } from '@/app/context/ThemeContext'

// 客户端组件：接收从服务器组件解析好的id
export default function PostDetailClient({ id }: { id: string }) {
  const [readTime, setReadTime] = useState(5)
  const { theme } = useTheme();
  
  // 为 Orb 设置合适的色调 - 使用文章 ID 来动态生成不同的颜色
  // 这样每篇文章都会有独特的背景
  const idNumber = parseInt(id, 10);
  const orbHue = theme === 'dark' 
    ? (120 + (idNumber * 30) % 240) // 在绿色到蓝色范围内变化
    : (200 + (idNumber * 30) % 160); // 在蓝色到紫色范围内变化
  
  useEffect(() => {
    // Simulate random read time between 3-8 minutes
    setReadTime(Math.floor(Math.random() * 6) + 3)
  }, [])

  return (
    <>
      {/* 背景 Orb */}
      <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
        <Orb
          hue={orbHue}
          hoverIntensity={0.15}
          rotateOnHover={true}
          forceHoverState={false}
          brightness={0.1}
        />
      </div>
      
      <motion.div
        initial="hidden"
        animate="show"
        className="py-8 sm:py-12 relative z-10"
      >
        <div className="grid gap-8">
          <motion.div variants={fadeIn('up', 0.1)} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-light-300 hover:text-primary-400 transition-colors duration-300 w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all posts
            </Link>
            
            <div className="flex gap-3 text-xs text-light-400">
              <span>Mar {Number(id) + 10}, 2024</span>
              <span>•</span>
              <span>{readTime} min read</span>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.2)} className="grid gap-6">
            <ViewTransition
              name={`post-${id}`}
              className="via-blur"
              exit="duration-100"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-800/40 to-secondary-800/40 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-light-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 opacity-70">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </ViewTransition>
            
            <motion.h1 
              variants={textVariant(0.3)}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-light-100 gradient-text"
            >
              Exploring Next.js View Transitions
            </motion.h1>
            
            <motion.div variants={fadeIn('up', 0.4)} className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1.5 rounded-full bg-primary-900/30 text-primary-300 border border-primary-700/20">Next.js</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-secondary-900/30 text-secondary-300 border border-secondary-700/20">React</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-gray-800/50 text-light-300 border border-light-300/10">View Transitions</span>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.5)} className="glass-card rounded-2xl p-6 space-y-6 text-light-300 leading-relaxed mt-4">
            <p>
              The View Transitions API provides a way to animate changes in web applications, creating smooth transitions between different states of a user interface.
            </p>
            
            <p>
              Next.js has integrated this browser API into its framework, allowing developers to easily create complex transition effects with minimal code.
            </p>
            
            <div className="border-l-4 border-primary-500 pl-4 py-2 my-8 bg-primary-900/10 rounded-r-lg italic">
              "View transitions help connect the user's journey through your site, making navigation feel more natural and intuitive."
            </div>
            
            <p>
              In this article, we'll explore how to implement view transitions in Next.js applications, looking at different techniques and best practices.
            </p>
            
            <div className="space-y-4 mt-8">
              <h2 className="text-xl font-medium text-light-200">Key benefits include:</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Improved perceived performance</li>
                <li>Enhanced user experience with meaningful animations</li>
                <li>Visual continuity between page states</li>
                <li>Reduced cognitive load during navigation</li>
              </ul>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-light-400 text-sm">Article {id} of 6</span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 0m-3.935 0l-9.566-5.314m0 0a2.25 2.25 0 10-3.935 0" />
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={slideIn('up', 'spring', 0.6, 0.5)}
            className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center mt-8"
          >
            <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-light-200">About the author</h3>
              <p className="text-light-300 mt-2">
                Delba is a Developer Experience Engineer at Vercel, where she works on creating intuitive and powerful developer tools. She's passionate about React, Next.js, and creating great user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
} 