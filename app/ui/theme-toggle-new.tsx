"use client"

import { motion } from 'framer-motion'
import { useTheme } from '@/app/context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 active:scale-95 transition overflow-hidden rounded-full p-[1px] focus:outline-none"
      whileTap={{ scale: 0.95 }}
      title={`切换到${theme === 'dark' ? '亮色' : '暗色'}模式`}
      aria-label={`切换到${theme === 'dark' ? '亮色' : '暗色'}模式`}
    >
      <span
        className={`absolute inset-[-1000%] animate-[spin_3s_linear_infinite] ${
          theme === 'dark'
            ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#f59e0b_0%,#f97316_50%,#eab308_100%)]'
            : 'bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#6366f1_50%,#8b5cf6_100%)]'
        }`}
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ${
          theme === 'dark'
            ? 'bg-gray-950 text-yellow-300'
            : 'bg-gray-50 text-gray-800'
        } backdrop-blur-3xl`}
      >
        {theme === 'dark' ? (
          <SunIcon className="w-5 h-5" />
        ) : (
          <MoonIcon className="w-5 h-5" />
        )}
      </span>
    </motion.button>
  )
}

// 太阳图标组件
function SunIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  )
}

// 月亮图标组件
function MoonIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
  )
} 