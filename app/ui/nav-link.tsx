"use client"
import { clsx as cx } from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useTheme } from '@/app/context/ThemeContext'
import ShinyText from './ShinyText'
import './button.css'

export function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const pathname = usePathname()
  const isActive = pathname === href
  const isExternal = href.startsWith('http')
  const { theme } = useTheme()

  // 将children转换为字符串，以便传递给ShinyText
  const textContent = typeof children === 'string' ? children : String(children)

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-block"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className={cx("button", isActive && "active", theme === 'dark' ? 'dark-button' : 'light-button', className)}>
          {isActive ? (
            <ShinyText 
              text={textContent}
              disabled={false}
              speed={3}
              className="text-white font-medium"
            />
          ) : (
            <span className="text-white/80 font-normal">
              {children}
            </span>
          )}
          
          {isExternal && (
            <span className="external-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </div>
      </motion.div>
    </Link>
  )
}
