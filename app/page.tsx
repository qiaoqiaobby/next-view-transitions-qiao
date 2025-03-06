"use client"

import { unstable_ViewTransition as ViewTransition } from "react"
import { Header } from "@/app/ui/header"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant, zoomIn } from "@/app/utils/motion"
import { ReactNode } from "react"
import SpotlightCard from "@/app/ui/SpotlightCard"
import { useTheme } from '@/app/context/ThemeContext'
import Orb from '@/app/ui/Orb'

// Card component for visual consistency
const Card = ({ 
  children, 
  className = "", 
  id = "", 
  linkTo = "" 
}: { 
  children: ReactNode; 
  className?: string; 
  id?: string | number; 
  linkTo?: string; 
}) => {
  const { theme } = useTheme();
  
  // 根据内容类型和主题设置不同的聚光灯颜色
  let spotlightColor: `rgba(${number}, ${number}, ${number}, ${number})` = "rgba(255, 255, 255, 0.2)";
  
  if (className?.includes('group')) {
    // 博客文章卡片
    spotlightColor = theme === 'dark' 
      ? "rgba(16, 185, 129, 0.15)" 
      : "rgba(99, 102, 241, 0.15)";
  } else if (String(id).includes('youtube')) {
    // YouTube 视频卡片
    spotlightColor = "rgba(239, 68, 68, 0.15)"; // 红色
  } else if (String(id).includes('talk')) {
    // 会议演讲卡片
    spotlightColor = "rgba(236, 72, 153, 0.15)"; // 粉色
  }

  return (
    <motion.div 
      variants={fadeIn('up', 0.2)}
      transition={{ duration: 0.3 }}
    >
      <SpotlightCard
        className={`overflow-hidden p-0 aspect-video relative ${className}`}
        spotlightColor={spotlightColor}
      >
        {linkTo ? (
          <Link href={linkTo} className="absolute inset-0 w-full h-full">
            <ViewTransition name={`post-${id}`} className="via-blur">
              <div className="w-full h-full">{children}</div>
            </ViewTransition>
          </Link>
        ) : (
          <div className="w-full h-full">{children}</div>
        )}
      </SpotlightCard>
    </motion.div>
  )
}

export default function Home() {
  const { theme } = useTheme();
  // 根据当前主题设置不同的 hue 值
  const orbHue = theme === 'dark' ? 240 : 280; // 深蓝色或紫色
  
  return (
    <ViewTransition
      name="home"
      enter="page-enter"
      exit="page-exit duration-100"
    >
      {/* 背景 Orb */}
      <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
        <Orb
          hue={orbHue}
          hoverIntensity={0.3}
          rotateOnHover={true}
          forceHoverState={false}
          brightness={0.1}
        />
      </div>
      
      <motion.div 
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:gap-12 py-8 sm:py-12 relative z-10"
      >
        <Header isCollapsed={false} />

        <motion.div variants={fadeIn('up', 0.3)} className="grid gap-5">
          <motion.h2 variants={textVariant(0.4)} className="text-xl sm:text-2xl font-medium text-light-100">
            Youtube videos
          </motion.h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} id={`youtube-${index}`}>
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-4 flex items-center justify-center">
                  <div className="size-12 text-primary-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"/>
                    </svg>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn('up', 0.5)} className="grid gap-5">
          <motion.h2 variants={textVariant(0.6)} className="text-xl sm:text-2xl font-medium text-light-100">
            Conference talks
          </motion.h2>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} id={`talk-${index}`}>
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-4 flex items-center justify-center">
                  <div className="size-12 text-secondary-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M19 6H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6z"/>
                      <path d="M10 14.5c.64 0 1.22-.33 1.55-.86l1.45-2.4c.42-.7-.09-1.6-.9-1.6H9.9c-.8 0-1.32.9-.9 1.6l1.45 2.4c.33.53.9.86 1.55.86z"/>
                    </svg>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        <ViewTransition name="posts" className="via-blur" exit="duration-100">
          <motion.div variants={fadeIn('up', 0.7)} className="grid gap-5">
            <motion.div variants={textVariant(0.8)} className="flex justify-between items-center">
              <Link
                href="/blog"
                className="text-xl sm:text-2xl font-medium text-light-100 hover:text-primary-400 transition-colors duration-300"
              >
                Blog posts
              </Link>
              <motion.div
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-primary-500 hidden sm:block"
              >
                <Link href="/blog" className="flex items-center gap-1 text-sm">
                  View all
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => {
                const id = index + 1
                return (
                  <ViewTransition
                    key={id}
                    name={`post-${id}`}
                    className="via-blur"
                  >
                    <Card id={id} linkTo={`/blog/${id}`} className="group">
                      <div className="w-full h-full bg-gradient-to-br from-primary-800/30 to-secondary-800/30 p-4 flex items-center justify-center group-hover:from-primary-700/40 group-hover:to-secondary-700/40 transition-all duration-500">
                        <div className="size-12 text-light-100/70 flex items-center justify-center group-hover:text-light-100 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d="M7.25 6a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zM7 10.25a.75.75 0 01.75-.75h9.5a.75.75 0 010 1.5h-9.5a.75.75 0 01-.75-.75zM7.25 14a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zM2.5 4.25c0-.966.784-1.75 1.75-1.75h15.5c.966 0 1.75.784 1.75 1.75v15.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z" />
                          </svg>
                        </div>
                      </div>
                    </Card>
                  </ViewTransition>
                )
              })}
            </div>
          </motion.div>
        </ViewTransition>
        
        <motion.div 
          variants={fadeIn('up', 0.9)}
          className="mt-10 text-center text-sm text-light-300/60"
        >
          © {new Date().getFullYear()} • Built with Next.js and View Transitions
        </motion.div>
      </motion.div>
    </ViewTransition>
  )
}
