'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageCircle, Linkedin, Instagram, Facebook, Globe } from 'lucide-react'
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const socialLinks = [
    {
      name: 'Visit Website',
      url: 'https://bichitras.com',
      icon: <Globe className="w-5 h-5" />,
      color: 'bg-[#6d28d9] hover:bg-[#5b21b6]'
    },
    {
      name: 'Chat on WhatsApp',
      url: 'https://wa.me/9779842909887',
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: 'bg-[#25D366] hover:bg-[#128C7E]'
    },
  ]

  const secondaryLinks = [
    {
      name: 'Join Discord',
      url: 'https://discord.gg/AH2yns9d5u',
      icon: <FaDiscord className="w-5 h-5" />,
      color: 'bg-[#5865F2] hover:bg-[#4752C4]'
    },
    {
      name: 'Connect on LinkedIn',
      url: 'https://www.linkedin.com/company/bichitras/',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'bg-[#0A66C2] hover:bg-[#004182]'
    },
    {
      name: 'Follow on Instagram',
      url: 'https://www.instagram.com/bichitrasgroup/',
      icon: <Instagram className="w-5 h-5" />,
      color: 'bg-[#E4405F] hover:bg-[#C13584]'
    },
    {
      name: 'Follow on Facebook',
      url: 'https://www.facebook.com/profile.php?id=61569708486523',
      icon: <Facebook className="w-5 h-5" />,
      color: 'bg-[#1877F2] hover:bg-[#0D65D9]'
    },
  ]

  return (
    <main className="min-h-screen bg-[#1E0B38] bg-gradient-to-b from-[#1E0B38] via-[#2D1154] to-[#1E0B38] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-['Comfortaa']">
      {/* Animated background elements - stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[340px] mx-auto space-y-8">
        <div className="text-center space-y-3">
          <motion.div 
            className="flex flex-col justify-center items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/logo.png"
              alt="Bichitras Logo"
              width={120}
              height={48}
              className="h-auto w-auto"
              priority
            />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white tracking-wide">
              bichitras
            </h1>
          </motion.div>
          <motion.p 
            className="text-lg text-purple-200 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Digital Guru
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Primary Actions */}
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <Button 
                  className={`w-full bg-[#2D1154] hover:bg-[#3D1674] text-white hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 py-5 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]`}
                >
                  {link.icon}
                  <span className="text-base tracking-wide">{link.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </Button>
              </Link>
            </motion.div>
          ))}

          {/* Divider */}
          <motion.div 
            className="flex items-center justify-center gap-3 my-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="h-px bg-purple-500/20 flex-1" />
            <span className="text-purple-200 text-sm tracking-wide">Connect With Us</span>
            <div className="h-px bg-purple-500/20 flex-1" />
          </motion.div>

          {/* Secondary Links */}
          {secondaryLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              className="group"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <Button 
                  className={`w-full bg-[#2D1154] hover:bg-[#3D1674] text-white hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 py-4 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]`}
                >
                  {link.icon}
                  <span className="text-base tracking-wide">{link.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
