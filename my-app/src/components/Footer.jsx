"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    (<footer
      className="bg-gray-800 bg-opacity-90 backdrop-blur-md text-white py-8 px-6 z-10">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="mb-4 md:mb-0">
          <p>&copy; 2025 CommunityImpact</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link href="#" aria-label="Email">
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/about">About</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/contact">Contact</Link>
            </motion.li>
          </ul>
        </nav>
      </motion.div>
    </footer>)
  );
}

