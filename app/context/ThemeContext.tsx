"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // 默认使用暗色模式
  const [theme, setTheme] = useState<Theme>('dark')
  
  useEffect(() => {
    // 从 localStorage 获取主题设置（如果有）
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      // 如果没有存储的主题，则使用系统偏好
      setTheme('light')
    }
  }, [])
  
  useEffect(() => {
    // 将主题应用到 document 元素
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme')
      document.documentElement.classList.remove('dark-theme')
    } else {
      document.documentElement.classList.add('dark-theme')
      document.documentElement.classList.remove('light-theme')
    }
    
    // 保存到 localStorage
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 