"use client"

import { unstable_ViewTransition as ViewTransition } from "react"
import { clsx as cx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import profile from "@/app/ui/delba.jpg"
import { NavLink } from "@/app/ui/nav-link"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/app/utils/motion"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/app/ui/theme-toggle"
import ShinyText from './ShinyText'

export interface HeaderProps {
  isCollapsed?: boolean
}

export function Header({ isCollapsed = false }: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      className={cx("grid grid-cols-[auto_1fr] gap-4 sm:gap-6 md:gap-8", {
        "mt-8 sm:mt-12 md:mt-24": !isCollapsed,
        "my-4 items-center": isCollapsed,
      })}
    >
      <ViewTransition name="header-image" className="via-blur">
        <motion.div
          variants={fadeIn('right', 0.2)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/">
            <Image
              className={cx("rounded-full border-2 border-primary-500/20 shadow-md transition-all duration-300", {
                "size-10 sm:size-12 md:size-16": isCollapsed,
                "size-16 sm:size-20 md:size-32": !isCollapsed,
              })}
              src={profile}
              alt="A profile picture of Delba"
              width={130}
              height={130}
              quality={95}
              priority
            />
          </Link>
        </motion.div>
      </ViewTransition>

      <div className="grid gap-3 md:gap-4 items-center">
        <div className="flex justify-between items-center">
          <ViewTransition name="header-title" className="via-blur">
            <motion.div variants={fadeIn('left', 0.3)}>
              <Link
                href="/"
                className={cx(
                  "w-fit font-medium [text-box:trim-both_cap_alphabetic] gradient-text transition-all duration-300 hover:opacity-90",
                  {
                    "text-xl sm:text-2xl self-center": isCollapsed,
                    "text-2xl sm:text-3xl md:text-4xl": !isCollapsed,
                  },
                )}
              >
                Delba
              </Link>
            </motion.div>
          </ViewTransition>
          
          <motion.div 
            variants={fadeIn('down', 0.2)}
            className="flex items-center"
          >
            <ThemeToggle />
          </motion.div>
        </div>

        {!isCollapsed ? (
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="text-sm sm:text-base max-w-md mb-4"
          >
            <ShinyText 
              text="Developer Experience at ▲Vercel. Learning and teaching React, Next.js and web concepts through videos, animations, and docs." 
              disabled={false}
              speed={8}
              className="text-light-300"
            />
          </motion.div>
        ) : null}

        <ViewTransition
          name="header-nav"
          share="via-blur"
        >
          <motion.div
            variants={isMobile ? slideIn('up', 'spring', 0.5, 0.5) : slideIn('left', 'spring', 0.5, 0.5)}
            className={cx(
              "flex flex-wrap items-center justify-start",
              isMobile ? "gap-3 mt-4" : "gap-6 mt-2",
              {
                "col-span-2 md:col-start-2 md:justify-self-end mt-2 md:mt-0": isCollapsed,
              }
            )}
          >
            <NavLink href="/">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="https://www.youtube.com/@delba">Youtube</NavLink>
            <NavLink href="https://twitter.com/delba_oliveira">Twitter</NavLink>
          </motion.div>
        </ViewTransition>
      </div>
    </motion.div>
  )
}
